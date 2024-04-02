const BidModel = require("../Model/BidForJob");
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
    if (jobPost) {
      await new BidModel({
        jobId: jobPost._id,
        consumerId: jobPost.postedBy,
        duration: req.body.duration,
        bids: [{ consumerBid: jobPost?.budget }],
      }).save();
    }
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
    console.log(req.body);
    const job = await JobPost.findById(req.params.jobId);
    if (!job || !userId) {
      return res.status(404).json({ message: "Job post not found" });
    }
    if (job.applied.includes(userId)) {
      return res.status(403).json({ message: " already apllied " });
    }
    job.applied.push(userId);
    job.save();
    const bid = await BidModel.findOne({ jobId: job?._id });
    bid.tradepersonId = userId;
    bid.bids[bid.bids.length - 1].tradepersonBid = req.body.bid;
    bid.duration = req.body.duration;
    bid.expireQuotation = req.body.expireQuotation;
    bid.save();

    res.status(201).json("Applied Successfylly");
  } catch (err) {
    console.log(err);
    errorHandler(res, err);
  }
};

exports.getAllJobsPostedByUser = async (req, res) => {
  try {
    const userId = req.params;
    const jobs = await JobPost.find({ postedBy: req.params.userId });
    res.status(200).json(jobs);
  } catch (err) {
    console.log(err);
    errorHandler(res, err);
  }
};
exports.getAllJobsAppliedByUser = async (req, res) => {
  try {
    const userId = req.params;
    const jobs = await JobPost.find({ applied: { $in: [req.params.userId] } });
    console.log(userId);
    res.status(200).json(jobs);
  } catch (err) {
    console.log(err);
    errorHandler(res, err);
  }
};

exports.getBidsByTradepersonAndConsumerId = async (req, res) => {
  try {
    const bids = await BidModel.find();
    res.status(200).json(bids);
  } catch (error) {
    console.log(err);
    errorHandler(res, err);
  }
};

exports.getAllBidsbyjobIdAndConsumerId = async (req, res) => {
  try {
    const { jobId, consumerId, tradepersonId } = req.params;
    const bids = await BidModel.findOne({
      jobId: jobId,
      consumerId: consumerId,
      tradepersonId: tradepersonId,
    });
    // console.log(jobId, consumerId, tradepersonId, bids);
    res.status(200).json(bids);
  } catch (error) {
    console.log(err);
    errorHandler(res, err);
  }
};
