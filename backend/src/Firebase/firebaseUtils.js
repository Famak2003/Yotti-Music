// firebaseUtils.js

const admin = require('./admin');

// Function to generate a Firebase UID for testing purposes
async function generateFirebaseUID() {
    try {
        // Generate a random UID (you can customize this logic as needed)
        const uid = 'testuser_' + Math.random().toString(36).substring(7);

        // Create a user with the generated UID
        await admin.auth().createUser({
            uid: uid,
        });

        console.log(`Firebase UID generated for testing: ${uid}`);
        return uid;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    generateFirebaseUID,
};