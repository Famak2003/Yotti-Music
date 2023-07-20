const admin = require("../admin");

async function createUser(email, password) {
    try {
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password,
        });

        return userRecord;
    } catch (error) {
        throw error;
    }
}

// Add other Firebase Authentication related functions here if needed

module.exports = {
    createUser,
    // Add other functions to be exported here
};