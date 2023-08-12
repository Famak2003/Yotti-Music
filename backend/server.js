const dotenv = require("dotenv");

// configure Dotenv
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");

const app = require("./app");

// DATABASE CONNECTION GOES HERE
const uri = "mongodb+srv://newuser:mypassword@atlascluster.mik1vdi.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}
connect();



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});