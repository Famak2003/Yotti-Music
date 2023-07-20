const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./controllers/errorController");
const firebaseAuth = require("./src/firebase/auth");
const firebaseDatabase = require("./src/firebase/database");

const app = express();

// ... (other middleware and route handlers if any)

app.post("/signup", async(req, res) => {
    const { email, password } = req.body;

    try {
        const userRecord = await firebaseAuth.createUser(email, password);

        // User creation successful, return a success response or token to the client
        res.status(200).json({ message: "User created successfully!" });
    } catch (error) {
        // Handle errors during user creation
        res.status(400).json({ error: error.message });
    }
});

// ... (other route handlers if any)

app.post("/post-feedback", async(req, res) => {
    const { name, email, message } = req.body;

    try {
        await firebaseDatabase.saveFormData(name, email, message);

        // Send a success response
        res.status(200).send("Form submitted successfully!");
        console.log("Form submitted successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// ... (other route handlers and middleware)

// Error handling middleware
app.use(globalErrorHandler);

module.exports = app;