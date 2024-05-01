const DigitalContractModel = require("../Model/DigitalContract");
const stripe = require("stripe")("your_secret_stripe_key");
const createDigital = async (req, res) => {
  try {
    let {
      surveyPhoto,
      clientSignature,

      client,
      contractor,
      contractSum,
      ...other
    } = req.body;
    req.body = other;
    if (req.files) {
      if (req?.files?.surveyPhoto && req?.files?.surveyPhoto[0]) {
        surveyPhoto = {
          img:
            "/consumer/digital-contractor/pic/" +
            req?.files?.surveyPhoto[0]?.originalname,
          path: req?.files?.surveyPhoto[0]?.path,
        };
      }
      if (req?.files?.clientSignature && req?.files?.clientSignature[0]) {
        clientSignature = {
          img:
            "/consumer/digital-contractor/pic/" +
            req?.files?.clientSignature[0]?.originalname,
          path: req?.files?.clientSignature[0]?.path,
        };
      }
      req.body.surveyPhoto = surveyPhoto;
      req.body.clientSignature = clientSignature;
    }
    req.body.client = JSON.parse(client)[0] ? JSON.parse(client)[0] : "";
    req.body.contractor = JSON.parse(contractor)[0]
      ? JSON.parse(contractor)[0]
      : "";
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

const makePeymant = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: req.body.currency,
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

module.exports = {
  createDigital,
  getDigitalById,
  updateDigital,
  deleteDigitalById,
  getAllDigitalContractor,
};
