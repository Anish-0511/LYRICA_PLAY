const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require("bcrypt");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set EJS
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

// ================= SIGNUP =================
app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.send("All fields are required");
        }

        // Check existing user
        const existingUser = await collection.findOne({ name: username });

        if (existingUser) {
            return res.send("User already exists. Please login.");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        await collection.insertMany({
            name: username,
            password: hashedPassword
        });

        console.log("User registered successfully");

        // 🔥 SUCCESS POPUP TRIGGER
        res.redirect("/?success=1");

    } catch (error) {
        console.log(error);
        res.send("Signup failed");
    }
});

// ================= LOGIN =================
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const check = await collection.findOne({ name: username });

        if (!check) {
            return res.send("User not found");
        }

        const isPasswordMatch = await bcrypt.compare(password, check.password);

        if (!isPasswordMatch) {
            return res.send("Wrong password");
        }

        // Login success
        res.render("home");

    } catch (error) {
        console.log(error);
        res.send("Login failed");
    }
});

// ================= SERVER =================
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});