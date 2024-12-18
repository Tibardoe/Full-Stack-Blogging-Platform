import express from "express";
import pkg from "pg";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import bcrypt from "bcrypt";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";


dotenv.config();


const app = express();

const { Pool } = pkg;

const pgSession = connectPgSimple(session);

const port = 5000;

const pool = new Pool({
    // user: process.env.USER,
    // host: process.env.HOST,
    // password: process.env.PASSWORD.trim(),
    // database: process.env.DATABASE,
    // port: process.env.PORT,
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.connect();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    store: new pgSession({
        pool: pool,
        tableName: "session"
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
    }
}));

app.use(cors({
    origin: 'https://dapper-banoffee-c7776e.netlify.app',
    credentials: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const response = await pool.query("SELECT * FROM user_account WHERE username = $1", [username]);
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

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const response = await pool.query("SELECT * FROM user_account WHERE password = $1", [profile.id]);
        let user = response.rows[0];

        if (!user) {
            const newUser = await pool.query("INSERT INTO user_account(username, password) VALUES($1, $2) RETURNING *", [profile.displayName, profile.id]);
            user = newUser.rows[0];
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    try {
        const response = await pool.query("SELECT * FROM user_account WHERE id = $1", [id]);
        const user = response.rows[0];
        done(null, user);
    } catch (error) {
        done(error);
    };
});

// Google login
app.get("/auth/google", passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback
app.get("/auth/google/blogs", passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('https://freeedom.netlify.app/blogs');
});


// create a new user
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query("INSERT INTO user_account(username, password) VALUES ($1, $2)", [username, hashedPassword]);
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
    res.json({ message: "Password updated successfully!" });
});

// create login

app.post("/login", passport.authenticate("local"), async (req, res) => {
    const response = await pool.query("SELECT * FROM user_account WHERE id = $1", [req.user.id]);
    const user = response.rows[0];

    const rememberMe = req.body.rememberMe;
    req.session.cookie.maxAge = rememberMe && 24 * 60 * 60 * 1000;
    res.json({ message: "Logged in successfully!", user: user });

});

// show blog posts

app.get("/blogs", async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Unauthorized access!" });
    }

    const id = req.user.id;


    try {
        const response = await pool.query("SELECT * FROM blog_post JOIN user_account ON user_account.id = blog_post.author_id");
        const userInitials = await pool.query("SELECT username FROM user_account WHERE id = $1", [id]);
        res.json({ blogs: response.rows, userInitials: userInitials.rows[0].username });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch blogs", error: error.message });
    }
});

// User Blogs
app.get("/user-blogs", async (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.user.id;
        const response = await pool.query(
            "SELECT blog_post.id AS blog_id, blog_post.title, blog_post.content, blog_post.author_id, blog_post.date_posted, user_account.id AS user_id, user_account.username, user_account.password FROM blog_post JOIN user_account ON user_account.id = blog_post.author_id WHERE blog_post.author_id = $1", [id]);
        res.json({ userBlogs: response.rows });
    };
});

// post blogs

app.post("/post-blog", async (req, res) => {
    const { title, content } = req.body;
    if (req.isAuthenticated()) {
        const author_id = req.user.id;
        const response = await pool.query("INSERT INTO blog_post(title, content, author_id) VALUES($1, $2, $3) RETURNING *", [title, content, author_id]);
        const result = response.rows;
        res.json({ post: result });
    } else {
        res.json({ message: "Unable to post" });
    };
});

// edit blogs

app.patch("/edit-post/:id", async (req, res) => {
    const { id } = req.params;
    const iD = parseInt(id)
    const { title, content } = req.body;


    if (req.isAuthenticated()) {
        try {
            await pool.query(
                "UPDATE blog_post SET title = $1, content = $2, date_posted = NOW() WHERE id = $3",
                [title, content, iD]
            );
            res.json({ message: "Post updated successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Error updating post", error: error.message });
        }
    } else {
        res.status(401).json({ message: "Unauthorized access!" });
    }
});

app.get("/edit-post/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "Missing post ID!" });
    }

    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Unauthorized access!" });
    }

    try {
        const response = await pool.query("SELECT * FROM blog_post WHERE id = $1", [id]);

        const foundPost = response.rows[0];
        if (foundPost) {
            res.json({ foundPost });
        } else {
            res.status(404).json({ message: "Post not found!" });
        }
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ message: "Error fetching post", error: error.message });
    }
});


// delete blogs

app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    if (req.isAuthenticated()) {
        await pool.query("DELETE FROM blog_post WHERE id = $1", [id]);
        res.json({ message: "Blog post deleted!" });
    } else {
        res.status(401).json({ message: "Unauthorized access!" });
    }
});

app.post("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error("Logout error:", err);
            return res.status(500).json({ message: "Failed to log out. Please try again." });
        }

        req.session.destroy((err) => {
            if (err) {
                console.error("Failed to destroy session:", err);
                return res.status(500).json({ message: "Failed to log out. Please try again." });
            }

            res.clearCookie("connect.sid");
            res.status(200).json({ message: "Logged out successfully!" });
        });
    });
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});