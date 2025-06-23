const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001; // Use environment variable or default

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies

// Basic health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// TODO: Add database connection logic here
// TODO: Add API routes for SaaS features here

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}); 