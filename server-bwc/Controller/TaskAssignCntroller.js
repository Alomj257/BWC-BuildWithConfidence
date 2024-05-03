const stripe = require("stripe")(process.env.STRIPE_SECRET);
const DigitalContractModel = require("../Model/DigitalContract");
const JobPost = require("../Model/JobPost");
const TaskAssign = require("../Model/TaskAssign");
const User = require("../Model/User");

const createTask = async (req, res) => {
  try {
    await new TaskAssign(req.body).save();
    res.status(201).json("Task assigned");
  } catch (error) {
    console.log(error);
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

//  job

const requestHire = async (req, res) => {
  try {
    const job = await JobPost.findById(req.params.id);
    console.log(job);
    if (!job) {
      return res.status(404).json({ message: "job id invalid" });
    }
    job.requested.push({
      requesterId: req.body.requesterId,
      requestedId: req.body.requestedId,
    });
    job.status = "hire";
    await job.save();
    return res.status(200).json("Your request has been sent");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

const getAllRequestedJobs = async (req, res) => {
  try {
    const jobs = await JobPost.find({
      requested: { $elemMatch: { requestedId: req.params.id } },
    });
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const acceptedRequest = async (req, res) => {
  try {
    const job = await JobPost.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "job id invalid" });
    }
    job.accept.push({
      consumerId: req.body.consumerId,
      tradepersonId: req.body.tradepersonId,
    });
    job.status = "accept";
    await job.save();
    return res.status(200).json("Your request has been sent");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

const getAllacceptedRequestJobs = async (req, res) => {
  try {
    // console.log(req.params.id);
    const jobs = await JobPost.find({
      accept: { $elemMatch: { consumerId: req.params.id } },
    });
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const ConsumerContractSign = async (req, res) => {
  try {
    const job = await JobPost.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "job id invalid" });
    }
    job.taskAssign.consumerId = req.body.consumerId;
    job.taskAssign.contractId = req.body.contractId;
    job.taskAssign.tradepersonId = req.body.tradepersonId;
    job.status = "consumer contract";
    await job.save();
    return res.status(200).json("you contract create successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const tradepersonContractSign = async (req, res) => {
  try {
    const job = await JobPost.findById(req.params.jobId);
    const contract = await DigitalContractModel.findById(req.params.contractId);
    if (!job || !contract) {
      return res.status(404).json({ message: " id invalid" });
    }
    contract.tradepersonSignature.push({
      name: req.body.name,
      signiture: req.body.signiture,
      tradepersonId: req.body.tradepersonId,
    });
    job.taskAssign.isContract = true;
    job.status = "tradeperson contract";

    console.log(job);
    await job.save();
    await contract.save();

    return res
      .status(200)
      .json("Contract signed successfully project in on live");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const getAllLiveJobs = async (req, res) => {
  try {
    const jobs = await JobPost.find({
      "taskAssign.consumerId": req.params.consumerId,
      "taskAssign.isContract": true,
    });
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

const sendPayment = async (req, res) => {
  try {
    const { tradepersonId, consumerId, contract, milestone, job, price } =
      req.body.items[0];
    const tradeperson = await User.findById(tradepersonId);
    const consumer = await User.findById(consumerId);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item?.job?.headline,
              description: `Consumer: ${
                consumer?.firstname + " " + consumer?.lastname
              } to Tradeperson: ${
                tradeperson?.firstname + " " + tradeperson?.lastname
              } for milestone ${milestone}`,
            },
            unit_amount: item?.price * 100,
          },
          quantity: item?.quantity,
        };
      }),
      mode: "payment",
      success_url: "http://localhost:3000/sucess",
      cancel_url: "http://localhost:3000/cancel",
    });
    const getcontract = await DigitalContractModel.findById(contract?._id);
    getcontract.paid.push({
      payementId: session.id,
      price,
      jobId: job?._id,
      tradepersonId,
      consumerId,
      milestone,
    });
    getcontract.save();
    res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getAllTask,
  getTaskById,
  updateTaskAssign,
  deleteTask,
  getRequestTask,
  requestHire,
  acceptedRequest,
  getAllRequestedJobs,
  getAllacceptedRequestJobs,
  ConsumerContractSign,
  tradepersonContractSign,
  getAllLiveJobs,
  sendPayment,
};
