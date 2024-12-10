import express from "express";
import axios from "axios";
import pg from "pg";
import bodyParser from "body-parser";
import cors from "cors";
import dotend from "dotenv";

const app = express();

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});