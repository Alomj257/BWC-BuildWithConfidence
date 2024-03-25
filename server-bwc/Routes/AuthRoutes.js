const {
  register,
  login,
  getUsersByRole,
  getAllUsers,
  sendInvitation,
  getUserById,
  updateUserDetails,
  uploadSigniture,
} = require("../Controller/AuthController");
const uploadFile = require("../Middlewares/uploadFile");
const AuthRoutes = require("express").Router();
AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);
AuthRoutes.put("/update/:id", updateUserDetails);
AuthRoutes.put(
  "/update/img/:id",
  uploadFile("./Public/Profile"),
  updateUserDetails
);
AuthRoutes.post(
  "/signiture/:id",
  uploadFile("./Public/Signitures"),
  uploadSigniture
);

AuthRoutes.get("/users", getAllUsers);
AuthRoutes.get("/users/:id", getUserById);
AuthRoutes.get("/users/by/:role", getUsersByRole);
AuthRoutes.post("/sent-invitation", sendInvitation);

module.exports = AuthRoutes;
