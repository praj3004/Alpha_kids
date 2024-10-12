const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Import auth routes

const app = express();
const port = process.env.PORT || 3000; // Use PORT from environment or default to 3000

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const mongoDBURI = process.env.MONGODB_URI || 'mongodb+srv://prajakta:Prajakta30@cluster0.to9em.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Use MONGODB_URI from environment or fallback to local MongoDB

mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error:', err));

// Use Auth Routes
app.use('/api', authRoutes); // Register the auth routes

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

