const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoute");

const app = express();

const logStream = fs.createWriteStream(path.join(__dirname, "../access.log"), {
  flags: "a",
});
app.use(morgan("combined", { stream: logStream }));

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

module.exports = app;
