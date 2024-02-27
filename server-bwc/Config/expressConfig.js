const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Router = require("../Routes/AllRoutes");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", Router);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Internal server error");
});

module.exports = app;
