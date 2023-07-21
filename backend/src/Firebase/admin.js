const admin = require("firebase-admin");
const serviceAccount = require("../../sak/ServiceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;