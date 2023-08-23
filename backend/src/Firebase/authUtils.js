// Import the initialized Firebase Admin SDK
const admin = require('./admin');

// Initialize Firebase Admin with your service account credentials
// Note: You don't need to specify the `serviceAccount` here since it's already initialized in admin.js
const uid = 'fUWFt2ntrdT5DvXNd6yjCXDQriA3'; // The UID you obtained

// Simulate authentication
admin.auth().createCustomToken(uid)
    .then((customToken) => {
        // Use the custom token for Firebase Authentication in your app
        // Perform database operations, trigger Cloud Functions, etc.
        console.log('Custom token:', customToken);
    })
    .catch((error) => {
        console.error('Error creating custom token:', error);
    });