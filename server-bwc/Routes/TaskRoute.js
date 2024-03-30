const {
  requestHire,
  getAllRequestedJobs,
  acceptedRequest,
  ConsumerContractSign,
  tradepersonContractSign,
  getAllLiveJobs,
  getAllacceptedRequestJobs,
} = require("../Controller/TaskAssignCntroller");

const taskRoute = require("express").Router();
taskRoute.post("/:id", requestHire);
taskRoute.get("/:id", getAllRequestedJobs);
taskRoute.post("/accept/:id", acceptedRequest);
taskRoute.get("/accept/:id", getAllacceptedRequestJobs);
taskRoute.post("/consumer/:id", ConsumerContractSign);
taskRoute.post("/traderperson/:jobId/:contractId", tradepersonContractSign);
taskRoute.get("/live-jobs/:consumerId", getAllLiveJobs);

module.exports = taskRoute;
