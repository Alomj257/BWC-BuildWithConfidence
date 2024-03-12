const {
  register,
  login,
  getUsersByRole,
  getAllUsers,
  sendInvitation,
  getUserById,
} = require("../Controller/AuthController");
const AuthRoutes = require("express").Router();
AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);
AuthRoutes.get("/users", getAllUsers);
AuthRoutes.get("/users/:id", getUserById);
AuthRoutes.get("/users/by/:role", getUsersByRole);
AuthRoutes.post("/sent-invitation", sendInvitation);

module.exports = AuthRoutes;
