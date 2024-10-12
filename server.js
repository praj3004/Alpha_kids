const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000; // Use PORT from environment or default to 3000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory user storage for demonstration (you should use a database in production)
let users = [];

// Registration route
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists!' });
    }

    // Save the new user
    users.push({ username, email, password });
    return res.status(201).json({ message: 'User registered successfully!' });
});

// Login route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user
    const user = users.find(user => user.email === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials!' });
    }

    return res.status(200).json({ message: 'Login successful!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

