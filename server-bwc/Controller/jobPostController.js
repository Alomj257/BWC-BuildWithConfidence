const JobPost = require("../Model/JobPost");

// Error handler
const errorHandler = (res, err) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
};

// Create a new job post
exports.createJobPost = async (req, res) => {
  try {
    console.log(req.body);
    const jobPost = await JobPost.create(req.body);
    res.status(201).json(jobPost);
  } catch (err) {
    errorHandler(res, err);
  }
};

// Get all job posts
exports.getAllJobPosts = async (req, res) => {
  try {
    const jobPosts = await JobPost.find().sort({ createdAt: -1 });
    res.json(jobPosts);
  } catch (err) {
    errorHandler(res, err);
  }
};

// Get job post by ID
exports.getJobPostById = async (req, res) => {
  try {
    const jobPost = await JobPost.findById(req.params.id);
    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    res.json(jobPost);
  } catch (err) {
    errorHandler(res, err);
  }
};

// Update job post by ID
exports.updateJobPost = async (req, res) => {
  try {
    const jobPost = await JobPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    res.json(jobPost);
  } catch (err) {
    errorHandler(res, err);
  }
};

// Delete job post by ID
exports.deleteJobPost = async (req, res) => {
  try {
    const jobPost = await JobPost.findByIdAndDelete(req.params.id);
    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    res.json({ message: "Job post deleted successfully" });
  } catch (err) {
    errorHandler(res, err);
  }
};

exports.applyJob = async (req, res) => {
  try {
    const { userId } = req.body;
    const job = await JobPost.findById(req.params.jobId);
    if (!job) {
      return res.status(404).json({ message: "Job post not found" });
    }
    console.log(job);
    job.applied.push(userId);
    job.save();
    res.status(201).json("Applied Successfylly");
  } catch (error) {
    errorHandler(res, err);
  }
};
