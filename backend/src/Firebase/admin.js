const admin = require("firebase-admin");
const serviceAccount = require("../../sak/ServiceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://yotti-c9acd.firebaseapp.com/__/auth/action?mode=action&oobCode=code'
});

module.exports = admin;