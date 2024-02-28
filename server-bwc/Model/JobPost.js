const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  worksToBeDone: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  completionDate: {
    type: Date,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  inclusiveOfVAT: {
    type: Boolean,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  images: {
    type: [String]
  }
}, { timestamps: true });

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;
