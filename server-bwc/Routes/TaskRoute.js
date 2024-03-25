const {
  requestHire,
  getAllRequestedJobs,
  acceptedRequest,
  ConsumerContractSign,
  tradepersonContractSign,
} = require("../Controller/TaskAssignCntroller");

const taskRoute = require("express").Router();
taskRoute.post("/:id", requestHire);
taskRoute.get("/:id", getAllRequestedJobs);
taskRoute.post("/accept/:id", acceptedRequest);
taskRoute.get("/accept/:id", getAllRequestedJobs);
taskRoute.post("/consumer/:id", ConsumerContractSign);
taskRoute.post("/traderperson/:jobId/:contractId", tradepersonContractSign);

module.exports = taskRoute;
