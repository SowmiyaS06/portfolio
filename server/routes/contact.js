const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
  body('message')
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { name, email, message } = req.body;

    const contact = new Contact({
      name,
      email,
      message
    });

    await contact.save();

    res.status(201).json({
      message: 'Thank you for your message! I\'ll get back to you soon.',
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Server error while submitting contact form',
      error: error.message 
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact messages
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });
    
    res.json({
      message: 'Contact messages fetched successfully',
      contacts
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ 
      message: 'Server error while fetching contacts',
      error: error.message 
    });
  }
});

// @route   PUT /api/contact/:id
// @desc    Update contact status
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ message: 'Contact message not found' });
    }

    res.json({
      message: 'Contact status updated successfully',
      contact
    });
  } catch (error) {
    console.error('Update contact error:', error);
    if (error.name === 'CastError') {
      return res.status(404).json({ message: 'Contact message not found' });
    }
    res.status(500).json({ 
      message: 'Server error while updating contact',
      error: error.message 
    });
  }
});

module.exports = router;