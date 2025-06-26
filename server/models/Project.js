const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  technologies: [{
    type: String,
    required: true,
    trim: true
  }],
  githubUrl: {
    type: String,
    trim: true,
    match: [
      /^https?:\/\/.+/,
      'Please enter a valid URL'
    ]
  },
  demoUrl: {
    type: String,
    trim: true,
    match: [
      /^https?:\/\/.+/,
      'Please enter a valid URL'
    ]
  },
  imageUrl: {
    type: String,
    trim: true,
    default: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);