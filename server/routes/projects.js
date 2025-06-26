const express = require('express');
const { body, validationResult } = require('express-validator');
const Project = require('../models/Project');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()
      .sort({ order: 1, createdAt: -1 });
    
    res.json({
      message: 'Projects fetched successfully',
      projects
    });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({ 
      message: 'Server error while fetching projects',
      error: error.message 
    });
  }
});

// @route   GET /api/projects/:id
// @desc    Get single project
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json({
      message: 'Project fetched successfully',
      project
    });
  } catch (error) {
    console.error('Get project error:', error);
    if (error.name === 'CastError') {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(500).json({ 
      message: 'Server error while fetching project',
      error: error.message 
    });
  }
});

// @route   POST /api/projects
// @desc    Create a project
// @access  Private
router.post('/', [
  auth,
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 100 })
    .withMessage('Title cannot exceed 100 characters'),
  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  body('technologies')
    .isArray({ min: 1 })
    .withMessage('At least one technology is required'),
  body('githubUrl')
    .optional()
    .isURL()
    .withMessage('Please enter a valid GitHub URL'),
  body('demoUrl')
    .optional()
    .isURL()
    .withMessage('Please enter a valid demo URL')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const project = new Project(req.body);
    await project.save();

    res.status(201).json({
      message: 'Project created successfully',
      project
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({ 
      message: 'Server error while creating project',
      error: error.message 
    });
  }
});

// @route   PUT /api/projects/:id
// @desc    Update a project
// @access  Private
router.put('/:id', [
  auth,
  body('title')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Title cannot exceed 100 characters'),
  body('description')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  body('githubUrl')
    .optional()
    .isURL()
    .withMessage('Please enter a valid GitHub URL'),
  body('demoUrl')
    .optional()
    .isURL()
    .withMessage('Please enter a valid demo URL')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({
      message: 'Project updated successfully',
      project
    });
  } catch (error) {
    console.error('Update project error:', error);
    if (error.name === 'CastError') {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(500).json({ 
      message: 'Server error while updating project',
      error: error.message 
    });
  }
});

// @route   DELETE /api/projects/:id
// @desc    Delete a project
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Delete project error:', error);
    if (error.name === 'CastError') {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(500).json({ 
      message: 'Server error while deleting project',
      error: error.message 
    });
  }
});

module.exports = router;