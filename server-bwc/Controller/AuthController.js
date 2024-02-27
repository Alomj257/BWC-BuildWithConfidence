const User = require("../Model/User");

const register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
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
    if (!user) {
      return res
        .status(401)
        .json({ message: "Your account not exist please sign up" });
    }
    const isMatched = await user.comparedPassword(req.body.password);
    if (!isMatched) {
      return res.status(403).json({ message: "Invalid password" });
    }
    res.status(201).json("login successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
