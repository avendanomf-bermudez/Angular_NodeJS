"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../Controller/index.controller");
class GameRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req,res) => res.send('GAME ON LINE'));
        this.router.get('/api/games/', index_controller_1.getGames);
        this.router.get('/api/games/:id', index_controller_1.getGameById);
        this.router.post('/api/games/', index_controller_1.CreateGame);
        this.router.put('/api/games/', index_controller_1.updateGame);
        this.router.delete('/api/games/:id', index_controller_1.DeleteGame);
    }
}
const gameRoutes = new GameRoutes();
exports.default = gameRoutes.router;
