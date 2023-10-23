// Import the initialized Firebase Admin SDK
const admin = require('./admin');

// Initialize Firebase Admin with your service account credentials
// Note: You don't need to specify the `serviceAccount` here since it's already initialized in admin.js
// Import the initialized Firebase Admin SDK
const express = require('express');
const app = express();

// Define an Express route that handles custom token creation
app.get('/create-custom-token', (req, res) => {
    const uid = 'fUWFt2ntrdT5DvXNd6yjCXDQriA3'; // The UID you obtained

    admin.auth().createCustomToken(uid)
        .then((customToken) => {
            // Return the custom token as a response to your client
            res.status(200).json({ customToken });
        })
        .catch((error) => {
            console.error('Error creating custom token:', error);
            res.status(500).json({ error: 'Failed to create custom token' });
        });
});