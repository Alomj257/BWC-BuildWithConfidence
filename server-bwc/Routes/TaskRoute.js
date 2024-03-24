const {
  requestHire,
  getAllRequestedJobs,
  acceptedRequest,
} = require("../Controller/TaskAssignCntroller");

const taskRoute = require("express").Router();
taskRoute.post("/:id", requestHire);
taskRoute.get("/:id", getAllRequestedJobs);
taskRoute.post("/accept/:id", acceptedRequest);
taskRoute.get("/accept/:id", getAllRequestedJobs);

module.exports = taskRoute;
