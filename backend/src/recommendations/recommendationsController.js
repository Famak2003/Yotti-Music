const spotifyAPI = require("../spotify/spotifyAPI");

// Function to get song recommendations based on user's favorite songs
async function getRecommendationsForUser(userId, token) {
    try {
        // Retrieve the list of user's favorite songs from the database
        const favoriteSongs = await firebaseDatabase.getFavoriteSongs(userId);

        // Extract the track IDs from the favorite songs
        const seedTracks = favoriteSongs.map((song) => song.spotifyId);

        // Get song recommendations using the Spotify API based on the user's favorite songs
        const recommendations = await spotifyAPI.getRecommendations(token, seedTracks);

        return recommendations;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getRecommendationsForUser,
};