import express, {Application} from 'express';
import  morgan  from 'morgan';
import cors from 'cors';

import  IndexRoutes  from './Routes/IndexRoutes';
import GameRoutes from "./Routes/GameRoutes";

class Server {
    public App: Application;
    constructor() {
        this.App = express();
        this.Config();
        this.Routes();
    }
    Config(): void{
        this.App.set('port',process.env.PORT || 3000)
        this.App.use(morgan('dev'));
        this.App.use(cors());
        this.App.use(express.json());
        this.App.use(express.urlencoded({extended:false}));
    }
    Routes(): void{
        this.App.use(IndexRoutes);
        this.App.use(GameRoutes);
    }
    start(): void{
        this.App.listen(this.App.get('port'), () =>{
            console.log('Server on port: ',this.App.get('port'));
        })
    }
}
const Serve = new Server();
Serve.start();