const AuthRoutes = require("./AuthRoutes");

const Routes = require("express").Router();
Routes.use("/auth", AuthRoutes);
module.exports = Routes;
