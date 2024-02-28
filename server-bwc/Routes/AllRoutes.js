const AuthRoutes = require("./AuthRoutes");
const jobPostRoutes = require("./jobPostRoutes");
const supplierRoutes = require("./supplierRoutes");
const tradePersonRoutes = require("./tradePersonRoutes");

const Routes = require("express").Router();
Routes.use("/auth", AuthRoutes);
Routes.use("/consumer", jobPostRoutes);
Routes.use("/suppliers", supplierRoutes);
Routes.use("/tradeperson", tradePersonRoutes);

module.exports = Routes;
