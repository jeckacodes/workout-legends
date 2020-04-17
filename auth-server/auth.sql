DROP DATABASE auth;

CREATE DATABASE auth;

\c "auth";

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    username varchar(20) not null UNIQUE,
    password varchar(20) not null,
    firstname varchar(50) not null,
    lastname varchar(50) not null,
    age int not null,
    email varchar(60) not null UNIQUE
)