const { Connection } = require('pg');
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('API', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });

Conectar = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

Conectar()