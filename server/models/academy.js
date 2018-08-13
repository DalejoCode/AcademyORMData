const Sequelize = require('sequelize'),
    conection = require('./conection');

const Academy = conection.define('academy', {
    academy_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    academy_name: {
        type: Sequelize.STRING
    },
    academy_address: {
        type: Sequelize.STRING
    },
    academy_phone: {
        type: Sequelize.STRING
    },
    academy_email: {
        type: Sequelize.STRING,
        unique: true
    }
}, {
        tableName: 'academy',
        createdAt: false,
        updatedAt: false
    });

Academy.sync({ force: false }).then(() => {
    // Table created
    console.log('DataBase Academy Created');
});

module.exports = Academy;
