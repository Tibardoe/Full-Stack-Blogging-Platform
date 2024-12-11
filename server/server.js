import express from "express";
import axios from "axios";
import pg from "pg";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = 5000;

const db = new pg.Client({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
})

db.connect();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

// create a new user

// create password reset

// create login

// show blog posts

// post blogs

// edit blogs

// delete blogs

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});