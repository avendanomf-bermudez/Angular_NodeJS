create database ng_games_db;
use ng_games_db;
create table games(
    id int primary key GENERATED ALWAYS AS IDENTITY
    (START WITH 1 INCREMENT BY 1),
    title varchar(180),
    description varchar(255),
    image varchar(200),
    create_at TIMESTAMP default CURRENT_TIMESTAMP
);