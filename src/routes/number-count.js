const express = require("express");
const { numberCountController } = require("../controllers");

const numberCountRouter = express.Router();

numberCountRouter.get("/list", numberCountController.list);
numberCountRouter.post("/reset", numberCountController.reset);
numberCountRouter.post("/save/:number", numberCountController.save);

module.exports = numberCountRouter;
