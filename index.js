const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const arr = [{ Name: "adrian", surname: "moya" }];

app.get("/", function (req, res) {
  res.send(arr);
  arr.push({ Name: "a", surname: "b" });
});
app.listen(3000);
