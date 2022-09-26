import express, { Express ,NextFunction, Request,Response } from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import config from './config/config';
import logger from './config/logger';
import videogamesRoutes from './routes/viodegames';
import userRoutes from './routes/users';
import middleware from './controllers/middleware';
import mongoose, { Mongoose } from 'mongoose' ;


dotenv.config();

//Express app
const app: Express = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use( (req:Request, res: Response, next: NextFunction)=>{
    logger.info(
        `METHOD: [${req.method}] - URL - [${req.url}] - IP [000]`
    )
})




const port: string | number = process.env.PORT || 3000;


app.get('/', (req:Request, res: Response) =>{
    res.send (" typescript1")
})


app.listen ( port , ()=>{
    console.log(`Server listening on port ${port}`);
})