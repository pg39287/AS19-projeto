/***********************
 *       Modules
 ***********************/
import express = require('express');
const server: express.Application = express();
server.set('views', './www/views')
server.set('view engine', 'pug');

import utilities = require('./utilities');

/***********************
 *    Server Config
 ***********************/
const config = utilities.readServerConfiguration();

server.get('/', (request, response) => {
    response.render('index');
});

server.listen(config.port, () => { console.log('Server running at port: ' + config.port) })