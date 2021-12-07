const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/sequelize");

class NumberCount extends Model {
}

NumberCount.init({
  number: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    validate: {
      min: {
        args: 1,
        msg: "Number must be equal or greater than 1",
      },
      max: {
        args: 9,
        msg: "Number must be equal or less than 9",
      },
    },
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
    validate: {
      min: {
        args: 1,
        msg: "Counter must never be below 1!",
      },
    },
  },
}, {
  sequelize,
});

module.exports = NumberCount;
