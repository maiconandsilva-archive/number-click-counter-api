const express = require("express");
const cors = require("cors");
const api = require("./api");
const numberCount = require("./number-count");

const app = express();

// Load app settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register root routes
app.use("/", api);

api.use(numberCount);

// Register root middlewares

// Register root error routes
// app.use(errorsController.handleErrors);
module.exports = app;
