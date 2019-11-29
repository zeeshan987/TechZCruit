const mongoose = require("mongoose");

const CampaignSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  campaignTitle: {
    type: String,
    required: true
  },
  campaignDescription: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  fundsRequired: {
    type: Number,
    required: true
  },
  sponsers: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
      amount: {
        type: Number,
        required: true
      }
    }
  ],
  teamMembers: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }
    }
  ],
  votes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }
    }
  ],
  comments: [
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
  ],
  timeRequired: {
    type: String,
    required: true
  }
});

module.exports = Campaign = mongoose.model("campaign", CampaignSchema);
