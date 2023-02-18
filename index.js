// Import the required dependencies
const express = require('express');

// Create an instance of express
const app = express();

// Define the endpoint for the "Hello World" response
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
