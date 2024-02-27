const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  role: {
    type: String,
    required: true,
    enum: ["ADMIN", "CONSUMER", "TRADEPERSON"],
  },
  phoneNo: String,
  address: String,
  nationality: String,
  profile: String,
  imagePath: String,
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password") || user.isNew) {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
  }
  next();
});

userSchema.methods.comparedPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", userSchema);
module.exports = User;
