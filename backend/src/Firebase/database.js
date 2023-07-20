const admin = require("../admin");

// Define a mongoose schema and model for the form data
const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const FormDataModel = mongoose.model("FormData", FormDataSchema);

async function saveFormData(name, email, message) {
    try {
        // Create a new instance of the FormDataModel
        const formData = new FormDataModel({
            name,
            email,
            message,
        });

        // Save the form data to the database
        await formData.save();
    } catch (error) {
        throw error;
    }
}

// Add other Firebase Realtime Database related functions here if needed

module.exports = {
    saveFormData,
    // Add other functions to be exported here
};