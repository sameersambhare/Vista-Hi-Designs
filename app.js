const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const MongoUsername = process.env.MongoUsername;
const MongoPassword = process.env.MongoPassword;
mongoose.connect(
  `mongodb+srv://${MongoUsername}:${MongoPassword}@cluster0.bee27uq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);
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
