const {
  createDigital,
  updateDigital,
  deleteDigitalById,
  getAllDigitalContractor,
  getDigitalById,
} = require("../../Controller/DigitalContractor");
const uploadFile = require("../../Middlewares/uploadFile");

const DigitalRoutes = require("express").Router();

DigitalRoutes.post("/", uploadFile("./Public/DigitalContrator"), createDigital);
DigitalRoutes.put("/:id", updateDigital);
DigitalRoutes.delete("/:id", deleteDigitalById);
DigitalRoutes.get("/:id", getDigitalById);
DigitalRoutes.get("/", getAllDigitalContractor);

module.exports = DigitalRoutes;
