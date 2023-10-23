const mongoose = require("mongoose");

// Define a Mongoose schema and model for the user data
const UserDataSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
    }, ],
});

const UserDataModel = mongoose.model("UserData", UserDataSchema);

// Function to save a song to user's favorites in MongoDB
async function saveFavoriteSong(userId, songId) {
    try {
        // Find the user's data in the database based on the userId
        let userData = await UserDataModel.findOne({ userId });

        // If user data does not exist, create a new entry for the user
        if (!userData) {
            userData = new UserDataModel({ userId });
        }

        // Add the songId to the user's favorites array
        userData.favorites.push(songId);

        // Save the updated user data
        await userData.save();

        return true;
    } catch (error) {
        throw error;
    }
}

// Function to remove a song from user's favorites in MongoDB
async function removeFavoriteSong(userId, songId) {
    try {
        // Find the user's data in the database based on the userId
        const userData = await UserDataModel.findOne({ userId });

        // If user data exists, remove the songId from the favorites array
        if (userData) {
            userData.favorites.pull(songId);
            await userData.save();
        }

        return true;
    } catch (error) {
        throw error;
    }
}

// Function to get the list of user's favorite songs from MongoDB
async function getFavoriteSongs(userId) {
    try {
        // Find the user's data in the database based on the userId and populate the favorites array
        const userData = await UserDataModel.findOne({ userId }).populate("favorites");

        // Extract the song IDs from the populated favorites array
        const favoriteSongs = userData ? userData.favorites.map((song) => song.spotifyId) : [];

        return favoriteSongs;
    } catch (error) {
        throw error;
    }
}

// Function to create or update user in MongoDB based on Firebase UID
async function createOrUpdateUserInDatabase(firebaseUid) {
    try {
        // Find the user's data in the database based on the userId
        let userData = await UserDataModel.findOne({ userId: firebaseUid });

        // If user data does not exist, create a new entry for the user
        if (!userData) {
            userData = new UserDataModel({ userId: firebaseUid });
            await userData.save();
        }

        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    saveFavoriteSong,
    removeFavoriteSong,
    getFavoriteSongs,
    createOrUpdateUserInDatabase,
};