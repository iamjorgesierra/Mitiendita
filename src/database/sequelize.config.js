const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres', // Selecciona el dialecto de la base de datos (PostgreSQL en este caso).
  host: 'dpg-cl05ilbjdq6s73a1ikhg-a', // Reemplaza con el host de tu base de datos Render.
  port: 5432, // Puerto por defecto de PostgreSQL.
  username: 'mitiendita_user', // Reemplaza con tu nombre de usuario de la base de datos.
  password: 'vJGNYraNPqIy8zcmVYjstVlkVUvDI9hR', // Reemplaza con tu contraseña.
  database: 'mitiendita', // Reemplaza con el nombre de tu base de datos.
  logging: false, // Puedes habilitar esto para ver consultas SQL en la consola si es necesario.
});

module.exports = sequelize;
