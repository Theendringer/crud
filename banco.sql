CREATE DATABASE unisalas;
use unisalas;

CREATE TABLE salas(
    id int auto_increment primary key,
nome varchar(100) not null,
codigo varchar(6) not null,
descricao varchar(255) not null,
)

CREATE TABLE login(
    id int auto_increment primary key,
    username varchar(100) not null,
    password varchar(100) not null,
);

SHOW TABLE;
SHOW DATABASE;