const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Include CORS middleware

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Define your routes here
app.post('/api/register', (req, res) => {
    // Registration logic
});

app.post('/api/login', (req, res) => {
    // Login logic
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

