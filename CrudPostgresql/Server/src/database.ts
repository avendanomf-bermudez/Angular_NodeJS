import { Pool, Connection } from 'pg';

export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'12345',
    database:'ng_games_db',
    port:5432
});
