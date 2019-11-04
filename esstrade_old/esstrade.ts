/****************
 * REQUIRES
 ****************/
import express, { Application, Request, Response } from 'express';

const esstrade: Application = express();


/****************
 * SQLITE
 ****************/

/****************
 * ROUTERS
 ****************/
const indexRouter = require('./routes/indexRouter');

/****************
* MIDDLEWARES
****************/

//views
esstrade.set('views', 'views');
esstrade.set('view engine', 'pug');


//static public folder
esstrade.use(express.static('./public'));
esstrade.use(express.json())

/****************
* SERVER
****************/

esstrade.use('/', indexRouter);


esstrade.listen(7777, () => {
    console.log('Server running at port: ' + 7777)
});