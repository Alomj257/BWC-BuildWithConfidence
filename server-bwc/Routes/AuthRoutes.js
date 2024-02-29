const { register, login, getUsersByRole, getAllUsers, sendInvitation } = require("../Controller/AuthController");
const AuthRoutes = require("express").Router();
AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);
AuthRoutes.get("/users", getAllUsers);
AuthRoutes.get("/users/:role", getUsersByRole);
AuthRoutes.post("/sent-invitation", sendInvitation);

module.exports = AuthRoutes;
