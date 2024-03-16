const {
  createTask,
  updateTaskAssign,
  deleteTask,
  getTaskById,
  getAllTask,
  getRequestTask,
} = require("../Controller/TaskAssignCntroller");

const taskRoute = require("express").Router();

taskRoute.post("/", createTask);
taskRoute.put("/:id", updateTaskAssign);
taskRoute.delete("/:id", deleteTask);
taskRoute.get("/:id", getTaskById);
taskRoute.get("/", getAllTask);
// console.log(userId, jobId, consumerId);
taskRoute.get("/by/:userId/:jobId/:consumerId", getRequestTask);

module.exports = taskRoute;
