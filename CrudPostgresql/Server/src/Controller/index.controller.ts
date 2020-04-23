import { Request,Response } from 'express'
import { QueryResult } from 'pg'

import { pool } from '../database'




export const getGames = async (req:Request , res: Response): Promise<Response> => {
    const response : QueryResult = await pool.query('select * from games;');
    return res.status(200).json(response.rows);
}

export const getGameById = async (req: Request, res:Response): Promise<Response> => {
    const id: any = parseInt(req.params.id);
    const response : QueryResult = await pool.query('select * from games where id = $1 ;', [id] )
    return res.status(200).json(response.rows);
}

export const updateGame = async (req:Request, res:Response): Promise<Response> =>{
    try {
        const {id,title, description,image} = req.body;       
        const response: QueryResult= await pool.query('update games set title = $1, description = $2, image=$3 where id = $4 ;',[title,description,image,id]);
        pool.query('commit');
        return res.status(200).json(req.body);
    } catch (ex) {
        pool.query('roolback');
        return res.status(400).json('{"mesage": "Se genero un error tratando de actualizar un registro: '+ ex + '"}');
    }
    
}
export const DeleteGame = async (req:Request, res:Response):Promise<Response> => {
    try {
        const id: any =parseInt(req.params.id);
        const response: QueryResult = await pool.query('delete from games where id = $1 ;',[id]);
        pool.query('commit');
        return res.status(200).json('{"mesage": "Registro eliminado con exito."}');
    } catch (ex) {
        pool.query('roolback');
        return res.status(400).json('{"mesage": "Se genero un error tratando de eliminar un registro: '+ ex + '"}');
    }
    
}

export const CreateGame = async (req:Request, res:Response):Promise<Response> => {
    try {
        const {title,description,image} = req.body;       
        const response:QueryResult = await pool.query('insert into games (title,description,image) values($1,$2,$3)',[title, description, image]);
        pool.query('commit');
        return res.status(200).json('{"mesage": "Registro creado con exito."}');
    } catch (ex) {
        pool.query('roolback');
        return res.status(400).json('{"mesage": "Se genero un error tratando de crear un registro: '+ ex + '"}');
    }
    
}