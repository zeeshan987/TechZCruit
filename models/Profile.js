const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  status: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  githubUsername: {
    type: String
  },
  bio: {
    type: String
  },
  skills: {
    type: [String],
    required: true
  },
  socialLinks: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },
    youtube: {
      type: String
    }
  },
  experiences: [
    {
      company: {
        type: String,
        required: true
      },
      position: {
        type: String
      },
      location: {
        type: String
      },
      description: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        required: true
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String
      },
      fieldOfStudy: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        required: true
      }
    }
  ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
