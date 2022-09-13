const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db.js');
const PORT = 5050;


//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("HEY THERE");
})


app.post("/person", async (req, res) => {
    try {
        const {
            first_name, 
            last_name, 
            age,
            music_genre,
            favorite_season,
            favorite_food
        } = await req.body;

        const newPerson = await pool.query(
            "INSERT INTO persons (first_name, last_name, age, favorite_food, favorite_season, music_genre) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [first_name, last_name, age, favorite_food, favorite_season, music_genre]
        )
        res.json(newPerson.rows)
        console.log(req.body);
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(PORT, () => console.log("WE LIVE GOD"));