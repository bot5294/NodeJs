console.log("file opened");
const express = require("express");
const server = express();
server.get("/hi", function (req, res) {
  res.send("hello i am working");
});
server.use("/public", express.static(__dirname + "/public"));
server.listen(4567, () => {
  console.log("server running at htttp://www.127.0.0.1:4567/hi");
});
