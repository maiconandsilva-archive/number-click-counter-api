const NumberCount = require("./number-count");
const db = require("../database/sequelize");

const { env } = process;

function sync() {
  if (env.NODE_ENV === "development" && env.DB_SYNC === "true") {
    db.sync({
      alter: process.env.DB_SYNC_FORCE !== "true",
      force: process.env.DB_SYNC_FORCE === "true",
    });
  }
}

module.exports = {
  NumberCount,
  sync,
};
