const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Group = require('../../../models/community/Group');

// @route   GET /api/community/groups
// @desc    Get all groups
// @access  Public
router.get('/', async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   GET /api/community/groups/:id
// @desc    Get group by id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const group = await Group.findOne({ _id: req.params.id });
    res.json(group);
  } catch (err) {
    return res.status(500).send('Server error');
  }
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

// @route   PUT /api/community/groups/:id
// @desc    Update a group
// @access  Private
router.put(
  '/:id',
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

    let group = await Group.findById(req.params.id);

    if (!group) {
      return res.status(400).json({ msg: 'Group does not exist' });
    }

    if (group.admin.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    const { name, description } = req.body;

    try {
      group = await Group.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            name,
            description
          }
        },
        { new: true }
      );

      await res.json(group);
    } catch (err) {
      return res.status(500).send('Server error');
    }
  }
);

// @route   DELETE /api/community/groups/:id
// @desc    Delete a group
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);

    if (!group) {
      return res.status(400).json({ msg: 'Group does not exist' });
    }

    if (group.admin.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    try {
      await group.remove();
      res.json({ msg: 'Group removed' });
    } catch (err) {
      return res.status(500).send('Server error');
    }
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = router;
