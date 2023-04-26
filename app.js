const express = require('express');
const app = express();

// Define the API endpoint
app.get('/api/manifest', (req, res) => {
    // Define the JSON response
    const response = [{ html: '<script src="https://mfeservices.onrender.com/runtime.89424a2453fbce0c.js" type="module"></script> <script src="https://mfeservices.onrender.com/polyfills.5f77ae0f37392226.js" type="module"></script> <script src="https://mfeservices.onrender.com/main.737a91333ae6f91c.js" type="module"></script>', selector: 'head' }];

    // Send the JSON response
    res.json(response);
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});