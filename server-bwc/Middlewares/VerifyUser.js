const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const VerifyUser = async (req, res, next) => {
  try {
    const id = jwt.verify(
      req.headers.authorization,
      process.env.SECRET || "yourSecretKey"
    );
    const user = await User.findById(id);
    if (!id || !user) {
      return res.status(403).json("Your are not authorize");
    }
    // if (user && !user?.isEnable) {
    //   return res.status(400).json("Your account has been blocked/inactive");
    // }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = VerifyUser;
