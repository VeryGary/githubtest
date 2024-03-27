require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the current directory
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'emailTemplate.html'));
});

app.listen(PORT, () => {
    console.log(`Server on Port: ${PORT}`);
});