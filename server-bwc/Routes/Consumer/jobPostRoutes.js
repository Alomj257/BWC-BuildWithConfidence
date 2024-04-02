const express = require("express");
const jobPostRoutes = require("express").Router();
const jobPostController = require("../../Controller/jobPostController");

// Create a new job post
jobPostRoutes.post("/jobposts", jobPostController.createJobPost);

// Get all job posts
jobPostRoutes.get("/jobposts", jobPostController.getAllJobPosts);

// Get job post by ID
jobPostRoutes.get("/jobposts/:id", jobPostController.getJobPostById);
jobPostRoutes.get(
  "/jobposts/posted/:userId",
  jobPostController.getAllJobsPostedByUser
);
jobPostRoutes.get(
  "/jobposts/applied/:userId",
  jobPostController.getAllJobsAppliedByUser
);

// Update job post by ID
jobPostRoutes.put("/jobposts/:id", jobPostController.updateJobPost);

// Delete job post by ID
jobPostRoutes.delete("/jobposts/:id", jobPostController.deleteJobPost);
jobPostRoutes.post("/apply/:jobId", jobPostController.applyJob);
jobPostRoutes.get(
  "/bids/:jobId/:consumerId/:tradepersonId",
  jobPostController.getAllBidsbyjobIdAndConsumerId
);
jobPostRoutes.get(
  "/bids/all",
  jobPostController.getBidsByTradepersonAndConsumerId
);

module.exports = jobPostRoutes;
