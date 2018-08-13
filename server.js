'use strict';
const app = require('./app'),
    server = app.listen(app.get('port'), () => console.log(`Iniciando API REST-MVC Express con Postgres en el puerto ${app.get('port')}`));