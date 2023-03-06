const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.enable("trust proxy");
app.use(cors({}));
const port = process.env.PORT || 3001;

//do try connect strategy
mongoose
  .connect("mongodb://faraz:pass123@mongo:27017/?authSource=admin")
  .then(() => console.log("succesfully connected to DB"))
  .catch((e) => console.log(e));

app.get("/test", (req, res) => {
  res.send("<h1>Welcome to faraz shah test 1</h1>");
});

app.listen(port, () => {
  console.log("listeneing on port" + port);
});
