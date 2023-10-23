const admin = require("./admin");

async function createUser(email, password) {
    try {
        // Create a user in Firebase Authentication
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password,
        });

        // Obtain the Spotify access token
        const spotifyAccessToken = await getSpotifyAccessToken();

        // Store the access token along with the user's Firebase UID
        await associateSpotifyAccessToken(userRecord.uid, spotifyAccessToken);

        return userRecord;
    } catch (error) {
        throw error;
    }
}

async function associateSpotifyAccessToken(firebaseUid, spotifyAccessToken) {
    // Implement the logic to associate the Spotify access token with the user's Firebase UID.
    // You can store this association in your database, such as Firebase Firestore.
}

module.exports = {
    createUser,
    // Add other functions to be exported here
};