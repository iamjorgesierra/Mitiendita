const dotenv = require("dotenv");
dotenv.config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DBURL)

module.exports = { sequelize };