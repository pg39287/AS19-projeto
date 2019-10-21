/***********************
 *       Modules
 ***********************/
import express = require('express');
const server: express.Application = express();
//views
server.set('views', 'www/views');
server.set('view engine', 'pug');
//static
server.use(express.static('./www'));

import utilities = require('./src/utilities');

/***********************
 *    Server Config
 ***********************/
const config = utilities.readServerConfiguration();

server.get('/', (request, response) => {
    response.render('index');
});

server.listen(config.port, () => { console.log('Server running at port: ' + config.port) });