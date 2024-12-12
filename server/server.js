import express from "express";
import axios from "axios";
import pg from "pg";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import flash from "connect-flash";
import bcrypt from "bcrypt";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";

dotenv.config();


const app = express();

const pgSession = connectPgSimple(session);

const port = 5000;

const db = new pg.Client({
    user: process.env.USER,
    host: process.env.HOST,
    password: "Alpha295!",
    database: process.env.DATABASE,
    port: process.env.PORT,
})

console.log(typeof (process.env.PASSWORD));

db.connect();

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    store: new pgSession({
        db: db
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const response = await db.query("SELECT * FROM user_account WHERE username = $1", [username]);
        const user = response.rows[0];

        if (!user) {
            return done(null, false, { message: "User not found!" });
        };

        const foundUser = await bcrypt.compare(password, user.password);
        if (foundUser) {
            return done(null, user)
        } else {
            return done(null, false, { message: "Incorrect passowrd!" })
        }
    } catch (error) {
        return done(error)
    }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    try {
        const response = await db.query("SELECT * FROM user_account WHERE id = $1", [id]);
        const user = response.rows[0];
        done(null, user);
    } catch (error) {
        done(error);
    };
});

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// create a new user
app.post("/register", async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query("INSERT INTO user_account(username, password) VALUES ($1, $2)", [username, hashedPassword]);
        res.json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    };
});

// create password reset

app.post("/reset-password", async (params) => {
    const { email } = req.body;
    res.json({ message: "Password reset link sent!" });
});

app.post("/reset-password/:token", async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
    // Logic for verifying token and updating the password
    res.json({ message: "Password updated successfully!" });
});

// create login

app.post("/login", passport.authenticate("local"), (req, res) => {
    res.json({ message: "Logged in successfully!" });
});

// show blog posts

app.get("/blogs", async (req, res) => {
    if (req.isAuthenticated()) {
        const response = await db.query("SELECT * FROM blog_post");
        const result = response.rows;
        res.json({ blogs: result });
    } else {
        res.status(401).json({ message: "Unauthorized access!" });
    };
});

// post blogs

app.post("/post-blog", async (req, res) => {
    const { title, content } = req.body;
    if (req.isAuthenticated()) {
        const response = await db.query("INSERT INTO blog_post(title, content) VALUES($1, $2) RETURNING *", [title, content]);
        const result = response.rows;
        res.json({ post: result });
    } else {
        res.json({ message: "Unable to post" });
    };
});

// edit blogs

app.patch("/edit-post/:id", async (req, res) => {
    const { id } = req.params;
    if (req.isAuthenticated()) {
        const response = await db.query("SELECT * FROM blog_post WHERE id = $1", [id]);
        const foundPost = response.rows[0];
        if (foundPost) {
            res.json({ foundPost: foundPost });
        } else {
            res.json({ message: "Post not found!" });
        };
    };

});

// delete blogs

app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    if (req.isAuthenticated()) {
        await db.query("DELETE FROM blog_post WHERE id = $1", [id]);
        res.json({ message: "Blog post deleted!" });
    } else {
        res.status(401).json({ message: "Unauthorized access!" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});