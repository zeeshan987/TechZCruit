const mongoose = require('mongoose');

const CampaignSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: Number,
    required: true
  },
  fundsRequired: {
    type: Number,
    required: true
  },
  supporters: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      amount: {
        type: Number,
        required: true
      }
    }
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ],
  completionDate: {
    type: Date,
    required: true
  }
});

module.exports = Campaign = mongoose.model('campaign', CampaignSchema);
