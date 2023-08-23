require('dotenv').config();

const express = require("express");
const globalErrorHandler = require("./controllers/errorController");
const firebaseAuth = require("./src/firebase/auth");
const database = require("./src/firebase/database");
const favoritesController = require("./src/favorites/favoritesController");
const recommendationsController = require("./src/recommendations/recommendationsController");
// Import the lyricsController
const lyricsController = require('./src/lyrics/lyricsController');
/*const spotifyAPI = require("../Spotify/spotifyAPI"); // Update this line*/
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { getSpotifyAccessToken } = require('./src/spotify/spotifyAuth'); // Import Spotify access token function
const { searchSongs, getSongDetails, getRecommendations } = require('./src/spotify/spotifyAPI'); // Import Spotify API functions
const { simulateUserAuthentication } = require('./src/firebase/authUtils'); // Import the function




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
// Path to your Spotify utility file

dotenv.config();
app.use(bodyParser.json());


// Spotify API base URL
const SPOTIFY_API_BASE_URL = process.env.SPOTIFY_API_BASE_URL;

// Spotify API token
const SPOTIFY_API_TOKEN = process.env.customToken;



// Define a route to serve songs
app.get('/api/songs', async(req, res) => {
    try {
        // Example: Fetch songs from Spotify API (you can adapt this based on your needs)
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/search`, {
            headers: {
                Authorization: `Bearer ${SPOTIFY_API_TOKEN}`,
            },
            params: {
                q: 'Your search query', // Replace with your search query
                type: 'track',
            },
        });

        // Extract and send the list of songs
        const songs = response.data.tracks.items;
        res.json(songs);
    } catch (error) {
        console.error('Error fetching songs from Spotify:', error);
        res.status(500).json({ error: 'Failed to fetch songs' });
    }
});


// Endpoint to obtain Spotify access token after user login or signup
app.post('/get-spotify-token', async(req, res) => {
    try {
        // Get Firebase UID from the request (assuming you store it in req.body.userId)
        const firebaseUid = req.body.userId;

        // Obtain Spotify access token
        const spotifyAccessToken = await getSpotifyAccessToken();

        // Store the access token along with the user's Firebase UID (you can use your database logic here)
        // For example, you could use Firebase Firestore or MongoDB
        // Your logic to store the token...

        res.status(200).json({ message: 'Spotify access token obtained successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to obtain Spotify access token' });
    }
});


// Example of using the Spotify API functions
app.get('/search-songs', async(req, res) => {
    const { query, token } = req.query;

    try {
        // Search for songs using the Spotify API
        const songs = await searchSongs(token, query);

        res.status(200).json({ songs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to search for songs' });
    }
});


// Route to get song details by ID
app.get('/song-details/:songId', async(req, res) => {
    const { songId, token } = req.params;

    try {
        // Get song details using the Spotify API
        const songDetails = await getSongDetails(token, songId);

        res.status(200).json({ songDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get song details' });
    }
});

// Route to get song recommendations based on user's favorite songs
app.get('/recommendations', async(req, res) => {
    const { seedTracks, token } = req.query;

    try {
        // Get song recommendations using the Spotify API
        const recommendations = await getRecommendations(token, seedTracks.split(','));

        res.status(200).json({ recommendations });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get song recommendations' });
    }
});

// Handle user signup
app.post('/signup', async(req, res) => {
    const { email, password } = req.body;

    try {
        // Create a user in Firebase Authentication
        const userRecord = await firebaseAuth.createUser(email, password);

        // Associate Firebase UID with MongoDB document
        await database.createOrUpdateUserInDatabase(userRecord.uid);

        // Simulate user authentication by obtaining a custom token
        const customToken = await simulateUserAuthentication(userRecord.uid);

        // User creation successful, return a success response or token to the client
        res.status(200).json({ message: 'User created successfully!', userRecord, customToken });
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