const Sequelize = require('sequelize'),
    conection = require('./conection'),
    Academy = require('./academy');

const Teacher = conection.define('teacher', {
    teacher_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    teacher_document: {
        type: Sequelize.STRING,
        unique: true
    },   
    employee_name: {
      type: Sequelize.STRING
    },
    teacher_lastname: {
        type: Sequelize.STRING
    },
    teacher_address: {
      type: Sequelize.STRING
    },
    teacher_phone: {
        type: Sequelize.STRING
    },
    teacher_email: {
        type: Sequelize.STRING,
        unique: true
    }
  },{
      tableName: 'teacher',
      createdAt: false,
      updatedAt: false
  });

Teacher.belongsTo(Academy, {foreignKey: 'fk_academy_id'});

Teacher.sync({ force: false }).then(() => {
    // Table created
    console.log('DataBase Teacher Created');
});

module.exports = Teacher;