// db.js
const { MongoClient } = require('mongodb');

// Replace with your connection string
const uri = 'mongodb+srv://prajakta:Prajakta30@cluster0.to9em.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        return client.db(); // Returns the database instance
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Propagate the error
    }
}

module.exports = connectToDatabase; // Export the function
