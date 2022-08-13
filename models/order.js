const Sequelize = require("sequelize");
const seqeulize = require("../util/database");
const { DataTypes } = require("sequelize");
const tableName = "order";
//table name
const Order = seqeulize.define(tableName, {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = Order;
