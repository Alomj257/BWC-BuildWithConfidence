const {
  register,
  login,
  getUsersByRole,
  getAllUsers,
  sendInvitation,
  getUserById,
  updateUserDetails,
  uploadSigniture,
  googleLogin,
  googleCallback,
  logout,
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
AuthRoutes.get("/google", googleLogin);
AuthRoutes.get("/google/callback", googleCallback);
AuthRoutes.get("/logout", logout);

module.exports = AuthRoutes;
