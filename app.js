const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});
app.listen(port, () => {
  console.log(`Starting the server on ${port}`);
});
