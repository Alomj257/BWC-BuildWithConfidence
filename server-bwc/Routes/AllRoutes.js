const AuthRoutes = require("./AuthRoutes");
const ConsumerRoutes = require("./ConsumerRoutes");
const supplierRoutes = require("./supplierRoutes");
const tradePersonRoutes = require("./tradePersonRoutes");

const Routes = require("express").Router();
Routes.use("/auth", AuthRoutes);
Routes.use("/consumer", ConsumerRoutes);
Routes.use("/suppliers", supplierRoutes);
Routes.use("/tradeperson", tradePersonRoutes);

module.exports = Routes;
