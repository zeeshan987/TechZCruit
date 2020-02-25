const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Campaign = require("../../../models/crowdfunding/Campaign");

// @route   POST api/crowdfunding/campaign
// @desc    Create a campaign
// @access  Private=tested
router.post(
  "/",
  [
    auth,
    check("campaignTitle", "Title is required")
      .not()
      .isEmpty(),
    check("campaignDescription", "Description is required")
      .not()
      .isEmpty(),
    check("category", "Category is required")
      .not()
      .isEmpty(),
    check("fundsRequired", "funds required")
      .not()
      .isEmpty(),
    check("timeRequired", "Time required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      campaignTitle,
      campaignDescription,
      category,
      fundsRequired,
      teamMembers,
      timeRequired
    } = req.body;

    // Build profile object
    const campaignFields = {};
    campaignFields.user = req.user.id;
    if (campaignTitle) campaignFields.campaignTitle = campaignTitle;
    if (campaignDescription)
      campaignFields.campaignDescription = campaignDescription;
    if (category) campaignFields.category = category;
    if (fundsRequired) campaignFields.fundsRequired = fundsRequired;
    if (timeRequired) campaignFields.timeRequired = timeRequired;
    if (teamMembers) {
      campaignFields.teamMembers = teamMembers
        .split(",")
        .map(teamMembers => teamMembers.trim());
    }
    try {
      let campaign = await Campaign.findOne({ user: req.user.id });

      // Updating the campaign
      // if (campaign) {
      //   campaign = await Campaign.findOneAndUpdate(
      //     { user: req.user.id },
      //     { $set: campaignFields },
      //     { new: true }
      //   );

      //  return res.json(campaign);
      //}

      // Create new campaign
      campaign = new Campaign(campaignFields);

      await campaign.save();
      res.json(campaign);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server error");
    }
  }
);

// @route   DELETE /api/crowdfunding/campaign/:id
// @desc    Delete a campaign
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const campaign = await Campaign.findOne({ _id: req.params.id });

    // Check is campaign exists
    if (!campaign) {
      return res.status(404).json({ msg: "Campaign not found" });
    }

    // Check campaign
    if (campaign.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await campaign.remove();
    res.json({ msg: "Campaign removed" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   GET /api/crowdfunding/campaign
// @desc    Get all campaign
// @access  Public=tested
router.get("/", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   GET /api/crowdfunding/campaign/:id
// @desc    Get campaign by id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const campaign = await Campaign.findOne({
      _id: req.params.id
    }).populate("user", ["name", "avatar"]);

    res.json(campaign);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   PUT /api/crowdfunding/campaign/votes/:id
// @desc    Vote a campaign
// @access  Private=tested
router.put("/votes/:id", auth, async (req, res) => {
  try {
    const campaign = await Campaign.findOne({
      _id: req.params.id
    });

    //Check if the campaign already has a vote by login user
    const index = campaign.votes.map(item => item.user).indexOf(req.user.id);

    if (index !== -1) {
      return res.status(400).json({ msg: "Already voted for campaign" });
    }

    campaign.votes.push({ user: req.user.id });

    await campaign.save();
    res.json(campaign.votes); //? before:res.json(campaign)
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   PUT  /api/crowdfunding/campaign/devote/:id
// @desc    Devote a campaign
// @access  Private
router.put("/devote/:id", auth, async (req, res) => {
  try {
    const campaign = await Campaign.findOne({ _id: req.params.id });

    const removeIndex = campaign.votes
      .map(item => item.user)
      .indexOf(req.user.id);

    if (removeIndex === -1) {
      return res.status(400).json({ msg: "Campaign not liked" });
    }

    campaign.votes.splice(removeIndex, 1);

    await campaign.save();
    res.json(campaign.votes);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   POST /api/crowdfunding/campaign/comment/:id
// @desc    Comment on a campaign
// @access  Private
router.post(
  "/comment/:id",
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
      const campaign = await Campaign.findOne({ _id: req.params.id });

      campaign.comments.unshift({
        user: req.user.id,
        description
      });

      campaign.populate("comments.user", ["name", "avatar"], (err, res) => {
        if (err) throw err;
        return res;
      });

      await campaign.save();
      res.json(campaign);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server error");
    }
  }
);

// @route   DELETE /api/crowdfunding/campaign/comment/:id/:comment_id
// @desc    Delete a comment on a campaign
// @access  Private
router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const campaign = await Campaign.findOne({ _id: req.params.id });

    const removeIndex = campaign.comments
      .map(item => item.id)
      .indexOf(req.params.comment_id);

    if (removeIndex === -1) {
      return res.status(404).json({ msg: "Comment not found" });
    }

    const comment = campaign.comments.find(
      comment => comment.id === req.params.comment_id
    );

    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    campaign.comments.splice(removeIndex, 1);

    campaign.populate("comments.user", ["name", "avatar"], (err, res) => {
      if (err) throw err;
      return res;
    });

    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

module.exports = router;

