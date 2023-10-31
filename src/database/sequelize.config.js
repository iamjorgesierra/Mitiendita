const dotenv = require("dotenv");
dotenv.config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DBURL, {
  dialect: 'postgres', // Agrega el dialecto de PostgreSQL aquí.
});

module.exports = { sequelize };