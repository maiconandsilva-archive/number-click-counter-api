const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL, {
  define: {
    underscored: true,
  },
  logQueryParameters: process.env.NODE_ENV === "development",
  benchmark: process.env.NODE_ENV === "development",
});

module.exports = sequelize;
