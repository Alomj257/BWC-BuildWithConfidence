const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema(
  {
    // work, desc, budget,vat, headline, location, start, completion
    work: {
      type: [String],
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    start: {
      type: {},
      required: true,
    },
    completion: {
      type: {},
      required: true,
    },
    budget: {
      type: Number,
    },
    vat: {
      type: Boolean,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    postedBy: String,
    applied: Array,
  },
  { timestamps: true }
);

const JobPost = mongoose.model("JobPost", jobPostSchema);

module.exports = JobPost;
