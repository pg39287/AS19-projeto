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

server.get('/', (req, res) => {
    res.render('index');
});

server.get('/register', (req, res) => {
    res.render('auth/register');
})

server.get('/assets', (req, res) => {
    res.render('asset/assets');
})

server.get('/portfolio', (req, res) => {
    res.render('cfd/portfolio');
})

server.get('/settings', (req, res) => {
    res.render('user/settings');
})

server.listen(config.port, () => { console.log('Server running at port: ' + config.port) });