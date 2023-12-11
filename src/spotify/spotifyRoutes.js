const express = require('express');
const router = express.Router();

const {
    searchSongs,
    getSongDetails,
    getRecommendations,
} = require('./spotifyAPI'); // Import your Spotify API functions

const { searchSongsRoute } = require('./spotifyController');



// Spotify API base URL
const SPOTIFY_API_BASE_URL = process.env.SPOTIFY_API_BASE_URL;
// Spotify API token
const SPOTIFY_API_TOKEN = process.env.SPOTIFY_API_TOKEN;





// Function to get the Spotify access token for a user
async function getSpotifyAccessTokenForUser(userId) {
    // Implement the logic to retrieve the Spotify access token associated with the user's Firebase UID.
    // This involves querying your database (e.g., Firebase Firestore) to obtain the token.
    // Make sure the token is not expired.
}


// Define routes for interacting with Spotify
router.get('/search-songs', searchSongsRoute);

// Define a route to serve songs
router.get('/api/songs', async(req, res) => {
    try {
        // Example: Fetch songs from Spotify API (you can adapt this based on your needs)
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/search`, {
            headers: {
                Authorization: `Bearer ${SPOTIFY_API_TOKEN}`,
            },
            params: {
                q: 'drake', // Replace with your search query
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
router.post('/get-spotify-token', async(req, res) => {
    try {
        // Get Firebase UID from the request (assuming you store it in req.body.userId)
        const firebaseUid = req.body.userId;

        // Obtain Spotify access token
        const spotifyAccessToken = await getSpotifyAccessToken();

        // Store the access token along with the user's Firebase UID
        // For example, you could use Firebase Firestore or MongoDB
        // logic to store the token...

        res.status(200).json({ message: 'Spotify access token obtained successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to obtain Spotify access token' });
    }
});


router.get('/song-details/:songId', async(req, res) => {
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

router.get('/recommendations', async(req, res) => {
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

module.exports = router;