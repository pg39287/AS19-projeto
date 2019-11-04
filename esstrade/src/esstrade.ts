/****************
 * REQUIRES
 ****************/
import "reflect-metadata";
import express, { Application } from 'express';
import { createConnection, Connection, ConnectionOptions } from "typeorm";
import { User } from './models/user';
export { User } from './models/user';

const esstrade: Application = express();

/****************
 * SQLITE
 ****************/

const db_options: ConnectionOptions = {
    type: "sqlite",
    database: './database/esstrade.sqlite',
    entities: [User],
    logging: true
}
const db_connection = createConnection(db_options);


/****************
 * ROUTERS
 ****************/
const indexRouter = require('./routes/indexRouter');

/****************
* MIDDLEWARES
****************/

//views
esstrade.set('views', ['./src/views', './src/views/auth']);
esstrade.set('view engine', 'pug');

//static public folder
esstrade.use(express.static('./src/public'));
//express json
esstrade.use(express.json())

/****************
* SERVER
****************/

esstrade.use('/', indexRouter);

esstrade.listen(7777, () => {
    console.log('Server running at port: ' + 7777)
});