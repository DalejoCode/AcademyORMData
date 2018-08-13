'use strict'

const express = require('express'),
    router = express.Router(),
    Academy = require('./models/academy'),
    Employee = require('./models/employee'),
    Teacher = require('./models/teacher'),
    Course = require('./models/course'),
    Student = require('./models/student'),
    Vehicle = require('./models/vehicle'),
    Academy_Class = require('./models/class');

router
    .get('/', (request, response) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write('Hello, World');
    })
    .get('/Academy', (request, response) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        Academy.findAll().then(academies => {
            response.write(JSON.stringify(academies));
        });
    })
    .get('/Employee', (request, response) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        Employee.findAll().then(employees => {
            response.write(JSON.stringify(employees));
        });
    });

module.exports = router;