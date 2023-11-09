const Sequelize = require("sequelize");

// Connecting to database
const sequelize = new Sequelize(process.env.database ,process.env.user , process.env.password,{
    host:"localhost",
    dialect:"mysql",
    logging: false,
});

module.exports = {Sequelize, sequelize};