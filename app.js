const express = require('express'),
    sequelize = require('sequelize'),
    port = (process.env.PORT || 3000),
    routes = require('./server/routes'),
    conection = require('./server/models/conection');

let app = express();
app
    .set('port', port)
    .use(routes)


conection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = app;