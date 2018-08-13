const Sequelize = require('sequelize'),
    conection = require('./conection'),
    Academy = require('./academy');

const Employee = conection.define('employee', {
    employee_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    employee_document: {
        type: Sequelize.STRING,
        unique: true
    },   
    employee_name: {
      type: Sequelize.STRING
    },
    employee_lastname: {
        type: Sequelize.STRING
    },
    employee_address: {
      type: Sequelize.STRING
    },
    employee_phone: {
        type: Sequelize.STRING
    },
    employee_email: {
        type: Sequelize.STRING,
        unique: true
    }
  },{
      tableName: 'employee',
      createdAt: false,
      updatedAt: false
  });

Employee.belongsTo(Academy, {foreignKey: 'fk_academy_id'});

Employee.sync({ force: false }).then(() => {
    // Table created
    console.log('DataBase Employee Created');
});

module.exports = Employee;