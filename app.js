const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const mongoose = require("mongoose");
const { MongoUrl } = require("./key");
mongoose.connect(MongoUrl);
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to database.");
});
mongoose.connection.on("error", () => {
  console.log("Connection Failed.");
});
require("./models/user");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(require("./routes/authentication"));
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});
app.listen(port, () => {
  console.log(`Starting the server on ${port}`);
});
