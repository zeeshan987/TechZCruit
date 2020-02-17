const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  offers: [
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
  testers: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      status: {
        type: Boolean,
        default: false
      }
    }
  ],
  testCases: [
    {
      description: {
        type: String,
        required: true
      },
      expectedResult: {
        type: String,
        required: true
      },
      actualResults: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
          },
          status: {
            type: Boolean
          }
        }
      ]
    }
  ]
});

module.exports = Project = mongoose.model('project', ProjectSchema);
