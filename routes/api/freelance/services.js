const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../../middleware/auth');
const Service = require('../../../models/freelance/Service');

// @route   GET /api/freelance/services
// @desc    Get all services
// @access  Public
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

// @route   GET /api/freelance/services/user
// @desc    Get all services for user
// @access  Private
router.get('/user', auth, async (req, res) => {
  try {
    const services = await Service.find({ user: req.user.id });
    res.json(services);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

// @route   GET /api/freelance/services/search/:description
// @desc    Search for a particular service
// @access  Private
router.get('/search/:description', auth, async (req, res) => {
  const description = req.params.description;

  try {
    const services = await Service.find({
      title: new RegExp(description, 'i')
    });

    res.send(services);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   GET /api/freelance/services/:id
// @desc    Get service by id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findOne({
      _id: req.params.id
    })
      .populate('user', ['name', 'avatar'])
      .populate('comments.user', ['name', 'avatar'])
      .populate('supporters.user', ['name', 'avatar']);

    res.json(service);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   POST api/freelance/services
// @desc    Create a service
// @access  Private
router.post(
  '/',
  [
    auth,
    check('title', 'Title is required')
      .not()
      .isEmpty(),
    check('description', 'Description is required')
      .not()
      .isEmpty(),
    check('amount', 'Amount is required').isInt()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, amount } = req.body;

    try {
      const service = new Service({
        user: req.user.id,
        title,
        description,
        amount
      });

      await service.save();
      res.json(service);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  }
);

// @route   PUT api/freelance/services/:id
// @desc    Update a service
// @access  Private
router.put(
  '/:id',
  [
    auth,
    check('title', 'Title is required')
      .not()
      .isEmpty(),
    check('description', 'Description is required')
      .not()
      .isEmpty(),
    check('amount', 'Amount is required').isInt()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let service = await Service.findById(req.params.id);

      if (!service) {
        return res.status(400).json({ msg: 'Service does not exist' });
      }

      if (service.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }

      const { title, description, amount } = req.body;

      service = await Service.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            title,
            description,
            amount
          }
        },
        { new: true }
      );

      res.json(service);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  }
);

// @route   DELETE /api/freelance/services/:id
// @desc    Delete a service
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const service = await Service.findOne({ _id: req.params.id });

    // Check is service exists
    if (!service) {
      return res.status(404).json({ msg: 'Service not found' });
    }

    // Check service
    if (service.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await service.remove();
    res.json({ msg: 'Service removed' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
