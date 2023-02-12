const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

app.get("/", function (req, res) {
  res.send(arr);
});
app.listen(3000);
