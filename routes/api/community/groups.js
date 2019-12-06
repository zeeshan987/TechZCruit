const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Group = require('../../../models/community/Group');

// @route   GET /api/community/groups
// @desc    Test Route
// @access  Public
router.get('/', (req, res) => {
  res.send('Groups route');
});

// @route   POST /api/community/groups
// @desc    Create a group
// @access  Private
router.post(
  '/',
  [
    auth,
    check('name', 'Name is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;

    const newGroup = new Group({
      admin: req.user.id,
      name,
      description
    });

    try {
      await newGroup.save();
      res.json(newGroup);
    } catch (err) {
      return res.status(500).send('Server error');
    }
  }
);

module.exports = router;
