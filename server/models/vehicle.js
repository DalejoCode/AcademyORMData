const Sequelize = require('sequelize'),
    conection = require('./conection');

const Vehicle = conection.define('vehicle', {
    vehicle_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vehicle_license_plate: {
        type: Sequelize.STRING,
        unique: true
    },
    vehicle_model: {
        type: Sequelize.INTEGER
    },
    vehicle_trademark: {
        type: Sequelize.STRING
    },
    vehicle_number_of_wheels: {
        type: Sequelize.INTEGER
    }
}, {
        tableName: 'vehicle',
        createdAt: false,
        updatedAt: false
    });

Vehicle.sync({ force: false }).then(() => {
    // Table created
    console.log('DataBase Vehicle Created');
});

module.exports = Vehicle;