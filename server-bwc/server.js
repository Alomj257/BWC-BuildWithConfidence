const Connection = require("./Config/DBConnect");
const app = require("./Config/expressConfig");
const initializeSocketServer = require("./SocketServer/index");
const http = require("http");
const io = require("socket.io");
const PORT = process.env.PORT || 5500;
Connection();

const server = http.createServer(app);
initializeSocketServer(server);
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
