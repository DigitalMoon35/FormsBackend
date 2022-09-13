CREATE DATABASE practice;

CREATE TABLE persons(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    age INTEGER,
    music_genre VARCHAR(255),
    favorite_food VARCHAR(255),
    favorite_season VARCHAR(255)
);

