const express = require('express');
const User = require('../models/User'); // Adjust the path if necessary
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body; // Include email

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        return res.status(400).json({ message: 'Email already in use' });
    }

    // Create new user without hashing the password here
    const newUser = new User({ 
        username, 
        email, // Include email
        password // Password will be hashed in the pre-save hook
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    // Verify the password
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
});

module.exports = router;










