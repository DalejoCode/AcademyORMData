const Sequelize = require('sequelize');
const sequelize = new Sequelize('academia_autos_DABB', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

module.exports= sequelize;