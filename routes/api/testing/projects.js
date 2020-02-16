const express = require('express');
const router = express.Router();
const Project = require('../../../models/testing/Project');
const auth = require('../../../middleware/auth');
const { check, validationResult } = require('express-validator');

// @route   GET /api/testing/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   GET /api/testing/projects/user
// @desc    Get project for current user
// @access  Private
router.get('/user', auth, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id });
    res.json(projects);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   GET /api/testing/projects/:id
// @desc    Get project by id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json(project);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   POST /api/testing/projects
// @desc    Create a new testing project
// @access  Private
router.post(
  '/',
  [
    auth,
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('description', 'Description is required')
      .not()
      .isEmpty(),
    check('url', 'URL is required and must be valid').isURL(),
    check('amount', 'Amount is required and must be an integer').isInt()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, url, amount } = req.body;

    const newProject = new Project({
      user: req.user.id,
      name,
      description,
      url,
      amount
    });

    try {
      await newProject.save();
      res.json(newProject);
    } catch (err) {
      return res.status(500).send('Server error');
    }
  }
);

// @route   PUT /api/testing/projects/:id
// @desc    Update a testing project
// @access  Private
router.put(
  '/:id',
  [
    auth,
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('description', 'Description is required')
      .not()
      .isEmpty(),
    check('url', 'URL is required and must be valid').isURL(),
    check('amount', 'Amount is required and must be an integer').isInt()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let project = await Project.findById(req.params.id);

      if (!project) {
        return res.status(400).json({ msg: 'Project does not exist' });
      }

      if (project.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }

      const { name, description, url, amount } = req.body;

      project = await Project.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            name,
            description,
            url,
            amount
          }
        },
        { new: true }
      );

      res.json(project);
    } catch (err) {
      return res.status(500).send('Server error');
    }
  }
);

// @route   DELETE /api/testing/projects/:id
// @desc    Delete a project
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });

    // Check is project exists
    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    // Check project
    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await project.remove();
    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
