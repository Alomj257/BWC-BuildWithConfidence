const { register, login } = require("../Controller/AuthController");
const AuthRoutes = require("express").Router();
AuthRoutes.post("/", register);
AuthRoutes.post("/login", login);

module.exports = AuthRoutes;
