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
// @desc    Get projects for current user
// @access  Private
router.get('/user', auth, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id });
    res.json(projects);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   GET /api/testing/projects/user/ongoing
// @desc    Get ongoing projects for current user
// @access  Private
router.get('/user/ongoing', auth, async (req, res) => {
  try {
    let projects = await Project.find();
    projects = projects.filter(project => {
      const index = project.testers
        .map(tester => {
          if (!tester.status) {
            return tester.user;
          }
        })
        .indexOf(req.user.id);
      if (index !== -1) {
        return project;
      }
    });

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
    const project = await Project.findById(req.params.id)
      .populate('user', ['name', 'avatar'])
      .populate('offers.user', ['name', 'avatar'])
      .populate('testers.user', ['name', 'avatar']);
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

// @route   PUT /api/testing/projects/testcase/pass/:id/:testcase_id
// @desc    Pass a test case for current user
// @access  Private
router.put('/testcase/pass/:id/:testcase_id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(400).json({ msg: 'Project does not exist' });
    }

    let index = project.testCases
      .map(item => item._id)
      .indexOf(req.params.testcase_id);

    if (index === -1) {
      return res.status(400).json({ msg: 'Test case does not exist' });
    }

    project.testCases.map(testcase => {
      if (testcase._id.toString() === req.params.testcase_id) {
        index = testcase.actualResults
          .map(item => item.user)
          .indexOf(req.user.id);

        if (index === -1) {
          testcase.actualResults.push({
            user: req.user.id,
            status: true
          });
        } else {
          testcase.actualResults.map(item => {
            if (item.user.toString() === req.user.id) {
              item.status = true;
            }
            return item;
          });
        }
      }
      return testcase;
    });

    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   PUT /api/testing/projects/testcase/fail/:id/:testcase_id
// @desc    Fail a test case for current user
// @access  Private
router.put('/testcase/fail/:id/:testcase_id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(400).json({ msg: 'Project does not exist' });
    }

    let index = project.testCases
      .map(item => item._id)
      .indexOf(req.params.testcase_id);

    if (index === -1) {
      return res.status(400).json({ msg: 'Test case does not exist' });
    }

    project.testCases.map(testcase => {
      if (testcase._id.toString() === req.params.testcase_id) {
        index = testcase.actualResults
          .map(item => item.user)
          .indexOf(req.user.id);

        if (index === -1) {
          testcase.actualResults.push({
            user: req.user.id,
            status: false
          });
        } else {
          testcase.actualResults.map(item => {
            if (item.user.toString() === req.user.id) {
              item.status = false;
            }
            return item;
          });
        }
      }
      return testcase;
    });

    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   PUT /api/testing/projects/testcase/:id
// @desc    Create a new testcase for a project
// @access  Private
router.put(
  '/testcase/:id',
  [
    auth,
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('description', 'Description is required')
      .not()
      .isEmpty(),
    check('expectedResult', 'Expected result is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, expectedResult } = req.body;

    try {
      const project = await Project.findById(req.params.id);

      if (!project) {
        return res.status(400).json({ msg: 'Project does not exist' });
      }

      project.testCases.push({
        name,
        description,
        expectedResult
      });

      await project.save();
      res.json(project);
    } catch (err) {
      console.log(err);
      return res.status(500).send('Server error');
    }
  }
);

// @route   PUT /api/testing/projects/finish/:id
// @desc    Finish testing for a project for current user
// @access  Private
router.put('/finish/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(400).json({ msg: 'Project does not exist' });
    }

    project.testers.map(item => {
      if (item.user.toString() === req.user.id) {
        item.status = true;
      }
      return item;
    });

    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   PUT /api/testing/projects/offer/:id
// @desc    Add an offer for a project
// @access  Private
router.put(
  '/offer/:id',
  [auth, check('amount', 'Amount is required and must be an integer').isInt()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { amount } = req.body;

      const project = await Project.findById(req.params.id);

      if (!project) {
        return res.status(400).json({ msg: 'Project does not exist' });
      }

      const index = project.offers.map(item => item.user).indexOf(req.user.id);

      if (index !== -1) {
        return res.status(400).json({ msg: 'Offer already sent' });
      }

      project.offers.push({
        user: req.user.id,
        amount
      });

      project.populate('offers.user', ['name', 'avatar'], (err, res) => {
        if (err) throw err;
        return res;
      });

      await project.save();
      res.json(project);
    } catch (err) {
      return res.status(500).send('Server error');
    }
  }
);

// @route   DELETE /api/testing/projects/offer/:id/:offer_id
// @desc    Delete offer for a project
// @access  Private
router.delete('/offer/:id/:offer_id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(400).json({ msg: 'Project does not exist' });
    }

    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    const index = project.offers
      .map(item => item._id)
      .indexOf(req.params.offer_id);

    if (index === -1) {
      return res.status(400).json({ msg: 'Offer not found' });
    }

    project.offers.splice(index, 1);

    project.populate('offers.user', ['name', 'avatar'], (err, res) => {
      if (err) throw err;
      return res;
    });

    await project.save();
    res.json(project);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Server error');
  }
});

// @route   DELETE /api/testing/projects/testcase/:id/:testcase_id
// @desc    Delete a test case for a project
// @access  Private
router.delete('/testcase/:id/:testcase_id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(400).json({ msg: 'Project does not exist' });
    }

    const index = project.testCases
      .map(item => item._id)
      .indexOf(req.params.testcase_id);

    if (index === -1) {
      return res.status(400).json({ msg: 'Test case does not exist' });
    }

    project.testCases.splice(index, 1);

    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

// @route   PUT /api/testing/projects/:id/:user_id
// @desc    Add tester to a project
// @access  Private
router.put('/:id/:user_id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(400).json({ msg: 'Project does not exist' });
    }

    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    const user = await User.findById(req.params.user_id);

    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    const index = project.testers
      .map(item => item.user)
      .indexOf(req.params.user_id);

    if (index !== -1) {
      return res.status(400).json({ msg: 'User already a member' });
    }

    project.testers.push({ user: req.params.user_id });

    project.populate('testers.user', ['name', 'avatar'], (err, res) => {
      if (err) throw err;
      return res;
    });

    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

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
