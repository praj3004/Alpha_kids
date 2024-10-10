// db.js
const { MongoClient } = require('mongodb');

// Replace the following URL with your actual MongoDB connection string
const url = 'mongodb://localhost:27017'; // for local MongoDB
const dbName = 'mydataBase'; // replace with your database name

async function connectToMongo() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');
        
        const db = client.db(dbName);
        // You can perform database operations here if needed
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.close();
    }
}

connectToMongo();
