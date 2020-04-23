"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const IndexRoutes_1 = __importDefault(require("./Routes/IndexRoutes"));
const GameRoutes_1 = __importDefault(require("./Routes/GameRoutes"));
class Server {
    constructor() {
        this.App = express_1.default();
        this.Config();
        this.Routes();
    }
    Config() {
        this.App.set('port', process.env.PORT || 3000);
        this.App.use(morgan_1.default('dev'));
        this.App.use(cors_1.default());
        this.App.use(express_1.default.json());
        this.App.use(express_1.default.urlencoded({ extended: false }));
    }
    Routes() {
        this.App.use(IndexRoutes_1.default);
        this.App.use(GameRoutes_1.default);
    }
    start() {
        this.App.listen(this.App.get('port'), () => {
            console.log('Server on port: ', this.App.get('port'));
        });
    }
}
const Serve = new Server();
Serve.start();
