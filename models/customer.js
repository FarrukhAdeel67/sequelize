const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const tableName = 'customer';
const Customer = sequelize.define(tableName, {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Customer;
