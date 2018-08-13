const Sequelize = require('sequelize'),
    conection = require('./conection'),
    Teacher = require('./teacher'),
    Course = require('./course'),
    Vehicle = require('./vehicle'),
    Student = require('./student');

const Academy_Class = conection.define('academy_class', {
    academy_class_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
        tableName: 'academy_class',
        createdAt: false,
        updatedAt: false
    });

Academy_Class.belongsTo(Teacher, { foreignKey: 'fk_teacher_id' });
Academy_Class.belongsTo(Course, { foreignKey: 'fk_course_id' });
Academy_Class.belongsTo(Vehicle, { foreignKey: 'fk_vehicle_id' });
Academy_Class.belongsTo(Student, { foreignKey: 'fk_student_id' });

Academy_Class.sync({ force: false }).then(() => {
    // Table created
    console.log('DataBase Academy_Class Created');
});

module.exports = Academy_Class;