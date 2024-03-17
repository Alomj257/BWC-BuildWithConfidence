const TaskAssign = require("../Model/TaskAssign");

const createTask = async (req, res) => {
  try {
    console.log(req.body);
    await new TaskAssign(req.body).save();
    res.status(201).json("Task assigned");
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const updateTaskAssign = async (req, res) => {
  try {
    const task = await TaskAssign.findOne(req.params.id);
    if (!task) {
      return res.status(404).json("task id not found");
    }
    await TaskAssign.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(203).json("update successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const getTaskById = async (req, res) => {
  try {
    const task = await TaskAssign.findOne(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const getRequestTask = async (req, res) => {
  try {
    const { userId, consumerId, jobId } = req.params;
    console.log(req.params);
    const task = await TaskAssign.findOne({
      tradepersonId: userId,
      consumerId: consumerId,
      jobId: jobId,
    });
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const getAllTask = async (req, res) => {
  try {
    const task = await TaskAssign.find();
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const deleteTask = async (req, res) => {
  try {
    const task = await TaskAssign.findOne(req.params.id);
    if (!task) {
      return res.status(404).json("task id not found");
    }
    await TaskAssign.findByIdAndDelete(req.params.id);
    res.status(200).json("task delete successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = {
  createTask,
  getAllTask,
  getTaskById,
  updateTaskAssign,
  deleteTask,
  getRequestTask,
};
