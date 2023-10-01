const axios = require('axios');

// Your Spotify client ID and client secret
const SPOTIFY_CLIENT_ID = process.env.CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.CLIENT_SECRET;

// Function to obtain Spotify access token
async function getSpotifyAccessToken() {
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'client_credentials',
            },
            auth: {
                username: SPOTIFY_CLIENT_ID,
                password: SPOTIFY_CLIENT_SECRET,
            },
        });

        return response.data.access_token;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getSpotifyAccessToken,
};