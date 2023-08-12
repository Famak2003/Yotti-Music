require('dotenv').config();

const express = require("express");
const globalErrorHandler = require("./controllers/errorController");
const firebaseAuth = require("./src/firebase/auth");
const database = require("./src/database/database");
const favoritesController = require("./src/favorites/favoritesController");
const recommendationsController = require("./src/recommendations/recommendationsController");
// Import the lyricsController
const lyricsController = require('./src/lyrics/lyricsController');
/*const spotifyAPI = require("../Spotify/spotifyAPI"); // Update this line*/

const app = express();

// ... (other middleware and route handlers if any)

// User favorites routes
app.post("/add-to-favorites", favoritesController.addToFavorites);
app.delete("/remove-from-favorites", favoritesController.removeFromFavorites);
app.get("/favorites", favoritesController.getFavorites);
// Use the lyricsController for the /lyrics route
app.use('/lyrics', lyricsController);

// Song recommendations route
app.get("/recommendations", recommendationsController.getRecommendationsForUser);

// Handle user signup
app.post("/signup", async(req, res) => {
    const { email, password } = req.body;

    try {
        // Create a user in Firebase Authentication
        const userRecord = await firebaseAuth.createUser(email, password);

        // Associate Firebase UID with MongoDB document
        await database.createOrUpdateUserInDatabase(userRecord.uid);

        // User creation successful, return a success response or token to the client
        res.status(200).json({ message: "User created successfully!", userRecord });
    } catch (error) {
        // Handle errors during user creation
        res.status(400).json({ error: error.message });
    }
});


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

// Error handling middleware
app.use(globalErrorHandler);

module.exports = app;