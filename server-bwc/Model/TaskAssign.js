const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: String,
  jobId: { type: String, required: true },
  consumerId: { type: String, required: true },
  tradepersonId: { type: String, required: true },
  constractId: String,
  status: {
    type: String,
    enum: [
      "post",
      "apply",
      "hire",
      "accept",
      "consumer contract",
      "tradeperson contract",
      "live",
    ],
  },
  paid: Array,
  progress: {
    type: Number,
    default: 0,
  },
  request: {
    type: Boolean,
    default: false,
  },
  toaskTarget: {
    type: Number,
    default: 100,
  },
});

const TaskAssign = mongoose.model("task-assign", taskSchema);
module.exports = TaskAssign;
