"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
exports.getGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield database_1.pool.query('select * from games;');
    return res.status(200).json(response.rows);
});
exports.getGameById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('select * from games where id = $1 ;', [id]);
    return res.status(200).json(response.rows);
});
exports.updateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, title, description, image } = req.body;
        const response = yield database_1.pool.query('update games set title = $1, description = $2, image=$3 where id = $4 ;', [title, description, image, id]);
        database_1.pool.query('commit');
        return res.status(200).json(req.body);
    }
    catch (ex) {
        database_1.pool.query('roolback');
        return res.status(400).json('{"mesage": "Se genero un error tratando de actualizar un registro: ' + ex + '"}');
    }
});
exports.DeleteGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('delete from games where id = $1 ;', [id]);
        database_1.pool.query('commit');
        return res.status(200).json('{"mesage": "Registro eliminado con exito."}');
    }
    catch (ex) {
        database_1.pool.query('roolback');
        return res.status(400).json('{"mesage": "Se genero un error tratando de eliminar un registro: ' + ex + '"}');
    }
});
exports.CreateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, image } = req.body;
        const response = yield database_1.pool.query('insert into games (title,description,image) values($1,$2,$3)', [title, description, image]);
        database_1.pool.query('commit');
        return res.status(200).json('{"mesage": "Registro creado con exito."}');
    }
    catch (ex) {
        database_1.pool.query('roolback');
        return res.status(400).json('{"mesage": "Se genero un error tratando de crear un registro: ' + ex + '"}');
    }
});
