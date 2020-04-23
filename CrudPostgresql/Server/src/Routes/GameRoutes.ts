import { Router } from 'express';
import { getGames,getGameById, updateGame, DeleteGame, CreateGame } from '../Controller/index.controller';

class GameRoutes{
    public router : Router = Router();
    constructor(){
        this.config();
    }
    
    config(): void{
       // this.router.get('/',(req,res) => res.send('GAME ON LINE'));
       this.router.get('/api/games/',getGames);
       this.router.get('/api/games/:id',getGameById);
       this.router.post('/api/games/', CreateGame);
       this.router.put('/api/games/',updateGame);
       this.router.delete('/api/games/:id',DeleteGame);
    }
}

const gameRoutes = new GameRoutes();

export default gameRoutes.router;