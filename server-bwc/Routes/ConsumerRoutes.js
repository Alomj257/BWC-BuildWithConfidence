const DigitalRoutes = require("./Consumer/DigitalContractorRoutes");
const jobPostRoutes = require("./Consumer/jobPostRoutes");

const ConsumerRoutes = require("express").Router();

ConsumerRoutes.use("/jobposts", jobPostRoutes);
ConsumerRoutes.use("/digital-contractor", DigitalRoutes);

module.exports = ConsumerRoutes;
