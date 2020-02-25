const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  productTitle: {
    
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  productCategory: {
    type: String,
    required: true
  },
  sales: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  rating: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
      stars: {
        type: Number,
        required: false
      }
    }
  ],
  productTechnology: {
    type: [String],
    required: true
  },
  favourite: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }
    }
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Product = mongoose.model("product", ProductSchema);
