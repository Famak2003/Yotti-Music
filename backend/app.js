const express = require("express");
const globalErrorHandler = require("./controllers/errorController");
const firebaseAuth = require("./src/firebase/auth"); // Update this line
const favoritesController = require("./src/favorites/favoritesController"); // Update this line
const recommendationsController = require("./src/recommendations/recommendationsController"); // Update this line
/*const spotifyAPI = require("../Spotify/spotifyAPI"); // Update this line*/

const app = express();

// ... (other middleware and route handlers if any)

// User favorites routes
app.post("/add-to-favorites", favoritesController.addToFavorites);
app.delete("/remove-from-favorites", favoritesController.removeFromFavorites);
app.get("/favorites", favoritesController.getFavorites);

// Song recommendations route
app.get("/recommendations", recommendationsController.getRecommendationsForUser);

app.post("/signup", async(req, res) => {
    const { email, password } = req.body;

    try {
        const userRecord = await firebaseAuth.createUser(email, password);

        // User creation successful, return a success response or token to the client
        res.status(200).json({ message: "User created successfully!", userRecord });
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