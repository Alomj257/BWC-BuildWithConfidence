const Connection = require("./Config/DBConnect");
const app = require("./Config/expressConfig");
const PORT = process.env.PORT || 5500;
Connection();
app.listen(PORT, (req, res) => {
  console.log("server is runing on " + PORT);
});
