const express = require('express');
const app = express();

// Define the API endpoint
app.get('/api/manifest', (req, res) => {
    // Define the JSON response
    const response = [{
            selector: "head",
            html: "<script src='https://mfeservices.onrender.com/runtime.89424a2453fbce0c.js' type='module' defer></script>"
        },
        {
            selector: "head",
            html: "<script src='https://mfeservices.onrender.com/polyfills.5f77ae0f37392226.js' type='module'  defer></script>"
        },
        {
            selector: "head",
            html: "<script src='https://mfeservices.onrender.com/main.737a91333ae6f91c.js' type='module'  defer></script>"
        },
        {
            selector: "head",
            html: "<link rel='stylesheet' href='https://mfeservices.onrender.com/styles.f61d972cab9048d4.css' />"
        }
    ];

    // Set the appropriate headers to avoid CORS issues
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Send the JSON response
    res.json(response);
});

// Start the server
app.listen(() => {
    console.log('Server started on port 3000');
});
