require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the current directory
app.use(express.static(__dirname));

app.use(express.json());

const router = require('./routes/router.js')
app.use('/routes',router);


app.listen(PORT, () => {
    console.log(`Server on Port: ${PORT}`);
});