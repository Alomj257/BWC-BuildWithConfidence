const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    middlename: String,
    lastname: {
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
    phone: String,
    address: String,
    location: String,
    rating: Number,
    title: String,
    experience: Number,
    about: String,
    image: String,
    qualification: String,
    nationality: String,
    role: {
      type: String,
      required: true,
      enum: ["ADMIN", "CONSUMER", "TRADEPERSON"],
    },
  },
  { timestamps: true }
);

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

const User = mongoose.model("User", userSchema);
module.exports = User;
