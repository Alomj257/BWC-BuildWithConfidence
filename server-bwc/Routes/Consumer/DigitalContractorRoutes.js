const {
  createDigital,
  updateDigital,
  deleteDigitalById,
  getAllDigitalContractor,
  getDigitalById,
} = require("../../Controller/DigitalContractor");
const {
  uploadMuiltiFieldFiles,
} = require("../../Middlewares/uploadMultifieldFiles");

const DigitalRoutes = require("express").Router();

DigitalRoutes.post(
  "/",
  uploadMuiltiFieldFiles("./Public/DigitalContrator"),
  createDigital
);
DigitalRoutes.put("/:id", updateDigital);
DigitalRoutes.delete("/:id", deleteDigitalById);
DigitalRoutes.get("/:id", getDigitalById);
DigitalRoutes.get("/", getAllDigitalContractor);

module.exports = DigitalRoutes;
