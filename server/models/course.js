const Sequelize = require('sequelize'),
    conection = require('./conection'),
    Academy = require('./academy');

const Course = conection.define('course', {
    course_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },  
    course_name: {
      type: Sequelize.STRING
    },
    course_duration: {
        type: Sequelize.STRING
    }
  },{
      tableName: 'course',
      createdAt: false,
      updatedAt: false
  });

Course.belongsTo(Academy, {foreignKey: 'fk_academy_id'});

Course.sync({ force: false }).then(() => {
    // Table created
    console.log('DataBase Course Created');
});

module.exports = Course;