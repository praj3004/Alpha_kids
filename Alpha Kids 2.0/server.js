const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json()); // To parse JSON payloads
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded data

// Setup nodemailer transport using Gmail service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vaishnavijokhe@gmail.com', // Your Gmail account
        pass: 'tggh pcop hfci jkuu', // Replace with App password generated from Google account
    }
});

// Verify SMTP configuration
transporter.verify(function (error, success) {
    if (error) {
        console.error('SMTP configuration error:', error);
    } else {
        console.log('Server is ready to take messages');
    }
});

// Handle login request
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    console.log("Received email:", email); // Debugging: log received email
    console.log("Received password:", password); // Debugging: log received password

    // Simulate successful login for demonstration purposes
    if (email && password) {
        // Send a notification email
        const mailOptions = {
            from: 'vaishnavijokhe@gmail.com', // Sender address
            to: email, // Send email to the user's email
            subject: 'Login Notification',
            text: `Hello, you have successfully logged in to Alpha Kids app.`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ success: false, message: 'Failed to send email.' });
            } else {
                console.log('Email sent:', info.response);
                return res.status(200).json({ success: true, message: 'Login successful! Email sent.' });
            }
        });
    } else {
        res.status(400).json({ success: false, message: 'Invalid credentials.' });
    }
});

// Handle signup request (optional, for completeness)
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    console.log("Signup request received:", { name, email, password }); // Debugging: log signup details

    // Simulate successful signup for demonstration purposes
    if (name && email && password) {
        res.status(200).json({ success: true, message: 'Signup successful! Please log in.' });
    } else {
        res.status(400).json({ success: false, message: 'Signup failed! Please check your inputs.' });
    }
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
