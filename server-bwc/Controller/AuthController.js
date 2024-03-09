const User = require("../Model/User");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(req.body);
    const { password, cnfPassword } = req.body;
    if (user) {
      return res
        .status(401)
        .json({ message: "This username already exist please login" });
    }
    if (password !== cnfPassword) {
      return res.status(401).json({ message: "password not matched" });
    }
    await new User(req.body).save();
    res.status(201).json("your account successfully created");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Your account not exist please sign up" });
    }
    const isMatched = await user.comparedPassword(req.body.password);
    if (!isMatched) {
      return res.status(403).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, "yourSecretKey", {
      expiresIn: "3h",
    });
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getUsersByRole = async (req, res) => {
  try {
    let { role } = req.params;
    role = role.toUpperCase();
    console.log("Requested role:", role);
    if (!["ADMIN", "CONSUMER", "TRADEPERSON"].includes(role)) {
      console.log("Invalid role specified");
      return res.status(400).json({ message: "Invalid role specified" });
    }
    const users = await User.find({ role });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Sending invitation to tradeperson from consumer panel
const sendInvitation = async (req, res) => {
  try {
    const { tradepersonId } = req.body;
    const tradeperson = await User.findById(tradepersonId);

    if (!tradeperson) {
      return res.status(404).json({ message: "Tradeperson not found" });
    }

    return res.status(200).json({ message: "Invitation sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
  getUsersByRole,
  getAllUsers,
  sendInvitation,
  getUserById,
};
