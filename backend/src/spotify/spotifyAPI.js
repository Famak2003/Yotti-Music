const axios = require("axios");

// Spotify API base URL
const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";


// Function to make a request to the Spotify API with authentication header
async function makeSpotifyRequest(token, endpoint, params = {}) {
    try {
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}${endpoint}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: params,
        });

        return response.data;
    } catch (error) {
        throw error.response.data.error;
    }
}

// Function to search for songs using the Spotify API
async function searchSongs(token, query) {
    try {
        const response = await makeSpotifyRequest(token, "/search", {
            q: query,
            type: "track",
        });

        return response.tracks.items;
    } catch (error) {
        throw error;
    }
}

// Function to get song details using the Spotify API
async function getSongDetails(token, songId) {
    try {
        const response = await makeSpotifyRequest(token, `/tracks/${songId}`);
        return response;
    } catch (error) {
        throw error;
    }
}

// Function to get song recommendations using the Spotify API based on user's favorite songs
async function getRecommendations(token, seedTracks) {
    try {
        const response = await makeSpotifyRequest(token, "/recommendations", {
            seed_tracks: seedTracks.join(","),
        });

        return response.tracks;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    searchSongs,
    getSongDetails,
    getRecommendations,
};