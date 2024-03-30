const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Router = require("../Routes/AllRoutes");
const path = require("path");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/consumer/digital-contractor/pic",
  express.static(path.join(__dirname, "../public/DigitalContrator"))
);
app.use(
  "/profile/pic",
  express.static(path.join(__dirname, "../public/Profile"))
);
app.use(
  "/profile/signiture",
  express.static(path.join(__dirname, "../public/Signitures"))
);

app.use("/api", Router);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Internal server error");
});

module.exports = app;
