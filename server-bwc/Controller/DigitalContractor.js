const DigitalContractModel = require("../Model/DigitalContract");
const createDigital = async (req, res) => {
  try {
    // console.log(req.body);
    const createdData = await new DigitalContractModel(req.body).save();
    return res.status(201).json("digital contractor created successfully");
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ message: error.message });
  }
};

const getDigitalById = async (req, res) => {
  try {
    const data = await DigitalContractModel.findById(req.params.id);
    if (!data) {
      res.status(404).json({ message: "Digital contractor id invalid" });
    }
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error getting data by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

// Update
const updateDigital = async (req, res) => {
  try {
    const data = await DigitalContractModel.findById(req.params.id);
    if (!data) {
      res.status(404).json({ message: "Digital contractor id invalid" });
    }
    const updatedData = await DigitalContractModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json("Digital Contractor update successfully");
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete
const deleteDigitalById = async (req, res) => {
  try {
    const data = await DigitalContractModel.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Digital contractor id invalid" });
    }
    const deletedData = await DigitalContractModel.findByIdAndDelete(
      req.params.id
    );
    return res.status(200).json("Digital Contractor deleted successfully");
  } catch (error) {
    console.error("Error deleting data by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

const getAllDigitalContractor = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const AllDigitalContractors = await DigitalContractModel.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json(AllDigitalContractors);
  } catch (error) {
    console.error("Error deleting data by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDigital,
  getDigitalById,
  updateDigital,
  deleteDigitalById,
  getAllDigitalContractor,
};
