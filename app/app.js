import express from 'express';
import routes from './routes';
import time from './src/resources/cron'


class App{
    constructor(){
        this.server=express();
        this.Middlewares();
        this.Routes();
    }

    Middlewares(){
        this.server.use(express.json());
    }
    Routes(){
        this.server.use(routes);
    }
    Resources(){
        this.server.use(time)
    }



}

export default new App().server;



