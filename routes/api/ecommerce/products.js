const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Product = require("../../../models/eccomerce/Product");
const userModel = require("../../../models/User");

// @route   POST /api/ecommerce/products
// @desc    Add a product in a user store
// @access  Private
router.post(
  "/",
  [
    auth,
    check("productTitle", "Title is required")
      .not()
      .isEmpty(),
    check("productDescription", "Description is required")
      .not()
      .isEmpty(),
    check("productCategory", "Category is required")
      .not()
      .isEmpty(),
    check("price", "price required")
      .not()
      .isEmpty(),
    check("productTechnology", "Technology required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      productTitle,
      productDescription,
      productCategory,
      price,
      productTechnology
    } = req.body;

    const product = new Product({
      seller: req.user.id,
      productTitle,
      productDescription,
      productCategory,
      price,
      productTechnology
    });

    try {
      await product.save();

      const userId = await userModel.findById(req.user.id);
      if (!userId.storeOwner) {
        userId.storeOwner = true;
      }

      await userId.save();
      res.json(product);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server error");
    }
  }
);

// @route   GET /api/eccomerce/products
// @desc    Get all products
// @access  Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   DELETE /api/eccomerce/products/:id
// @desc    Delete a Product
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    // Check if product exists
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // Check product
    if (product.seller.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await product.remove();
    res.json({ msg: "Product removed" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   GET /api/ecommerce/products/:id
// @desc    Get product by id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id
    }).populate("user", ["name", "avatar"]);

    res.json(product);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   PUT /api/eccomerce/products/favourite:id
// @desc    favourite a product
// @access  Private
router.put("/favourite/:id", auth, async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id
    });

    //Check if the product already has a favourite by login user
    const index = product.favourite.map(item => item.user).indexOf(req.user.id);

    if (index !== -1) {
      return res.status(400).json({ msg: "Already favourite by user" });
    }

    product.favourite.push({ user: req.user.id });

    await product.save();
    res.json(product.favourite); //? before:res.json(product)
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   PUT  /api/eccomerce/products/unfavourite/:id
// @desc    Unfavourite a product
// @access  Private
router.put("/unfavourite/:id", auth, async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    const removeIndex = product.favourite
      .map(item => item.user)
      .indexOf(req.user.id);

    if (removeIndex === -1) {
      return res.status(400).json({ msg: "Product not into favourite" });
    }

    product.favourite.splice(removeIndex, 1);

    await product.save();
    res.json(product.favourite);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   POST /api/ecommerce/products/review/:id
// @desc    review on a product
// @access  Private
router.post(
  "/review/:id",
  [
    auth,
    check("description", "Description is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { description } = req.body;

    try {
      const product = await Product.findOne({ _id: req.params.id });

      product.reviews.unshift({
        user: req.user.id,
        description
      });

      product.populate("reviews.user", ["name", "avatar"], (err, res) => {
        if (err) throw err;
        return res;
      });

      await product.save();
      res.json(product);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server error");
    }
  }
);

// @route   DELETE /api/eccomerce/products/review/:id/:review_id
// @desc    Delete a review on a product
// @access  Private
router.delete("/review/:id/:review_id", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const product = await Product.findById({ _id: req.params.id });

    const removeIndex = product.reviews
      .map(item => item.id)
      .indexOf(req.params.review_id);

    if (removeIndex === -1) {
      return res.status(404).json({ msg: "review not found" });
    }

    const review = product.reviews.find(
      review => review.id === req.params.review_id
    );

    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    product.reviews.splice(removeIndex, 1);

    product.populate("reviews.user", ["name", "avatar"], (err, res) => {
      if (err) throw err;
      return res;
    });

    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
