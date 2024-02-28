const AuthRoutes = require("./AuthRoutes");
const jobPostRoutes = require("./jobPostRoutes");
const supplierRoutes = require("./supplierRoutes");

const Routes = require("express").Router();
Routes.use("/auth", AuthRoutes);
Routes.use("/consumer", jobPostRoutes);
Routes.use("/suppliers", supplierRoutes);

module.exports = Routes;
