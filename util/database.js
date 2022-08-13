const Sequelize = require("sequelize");
const sequelize = new Sequelize ('frkSequelize', 'root', 'fast0041se',{
    dialect:"mysql",
    host:"localhost"
});
module.exports = sequelize;