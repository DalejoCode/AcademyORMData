const Sequelize = require('sequelize'),
    conection = require('./conection');

const Student = conection.define('student', {
    student_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_name: {
        type: Sequelize.STRING
    },
    student_lastname: {
        type: Sequelize.STRING
    },
    student_document: {
        type: Sequelize.STRING,
        unique: true
    }, 
    student_address: {
        type: Sequelize.STRING
    },
    student_phone: {
        type: Sequelize.STRING
    },
    student_email: {
        type: Sequelize.STRING,
        unique: true
    }
}, {
        tableName: 'student',
        createdAt: false,
        updatedAt: false
    });

Student.sync({ force: false }).then(() => {
    // Table created
    console.log('DataBase Student Created');
});

module.exports = Student;