const express = require('express');
const path = require('path');
const app = express();

const absolutePath = path.join(__dirname, 'public'); // Calculate the absolute path to 'public' directory

// Use the express.static middleware to serve files from the 'public' directory
app.use(express.static(absolutePath));

app.listen(3000, () => {
    console.log("Server started");
});
