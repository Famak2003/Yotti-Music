// Import the initialized Firebase Admin SDK
const admin = require('./admin');

// Initialize Firebase Admin with your service account credentials
// Note: You don't need to specify the `serviceAccount` here since it's already initialized in admin.js
const uid = 'fUWFt2ntrdT5DvXNd6yjCXDQriA3'; // The UID you obtained

//Simulate authentication and return the custom token as a response
admin.auth().createCustomToken(uid)
    .then((customToken) => {
        // Return the custom token as a response to your client
        res.status(200).json({ customToken });
    })
    .catch((error) => {
        console.error('Error creating custom token:', error);
        res.status(500).json({ error: 'Failed to create custom token' });
    });