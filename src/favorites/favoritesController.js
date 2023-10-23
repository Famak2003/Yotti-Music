const firebaseDatabase = require("../firebase/database"); // why you go use .../ now to go back one directory na just ../

// Function to add a song to user's favorites
async function addToFavorites(userId, songId) {
    try {
        // Save the songId to the user's favorites in the database
        await firebaseDatabase.saveFavoriteSong(userId, songId);
    } catch (error) {
        throw error;
    }
}

// Function to remove a song from user's favorites
async function removeFromFavorites(userId, songId) {
    try {
        // Remove the songId from the user's favorites in the database
        await firebaseDatabase.removeFavoriteSong(userId, songId);
    } catch (error) {
        throw error;
    }
}

// Function to get the list of user's favorite songs
async function getFavorites(userId) {
    try {
        // Retrieve the list of user's favorite songs from the database
        const favoriteSongs = await firebaseDatabase.getFavoriteSongs(userId);
        return favoriteSongs;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addToFavorites,
    removeFromFavorites,
    getFavorites,
};