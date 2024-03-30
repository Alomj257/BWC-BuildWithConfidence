const DigitalContractModel = require("../Model/DigitalContract");
const createDigital = async (req, res) => {
  try {
    let {
      surveyPhoto,
      clientSignature,
      contractorSigniture,
      client,
      contractor,
      contractSum,
      ...other
    } = req.body;
    req.body = other;
    if (req.files) {
      surveyPhoto = {
        img:
          "/consumer/digital-contractor/pic/" +
          req?.files?.surveyPhoto[0]?.originalname,
        path: req?.files?.surveyPhoto[0]?.path,
      };
      clientSignature = {
        img:
          "/consumer/digital-contractor/pic/" +
          req?.files?.clientSignature[0]?.originalname,
        path: req?.files?.clientSignature[0]?.path,
      };
      contractorSigniture = {
        img:
          "/consumer/digital-contractor/pic/" +
          req?.files?.contractorSigniture[0]?.originalname,
        path: req?.files?.contractorSigniture[0]?.path,
      };
      req.body.surveyPhoto = surveyPhoto;
      req.body.clientSignature = clientSignature;
      req.body.contractorSigniture = contractorSigniture;
    }
    req.body.client = JSON.parse(client)[0];
    req.body.contractor = JSON.parse(contractor)[0];
    req.body.constractSum = JSON.parse(contractSum);
    const createdData = await new DigitalContractModel(req.body).save();
    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json(new Error({ message: error.message }));
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
