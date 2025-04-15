

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./db');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const bodyParser = require('body-parser');
const itemsRouter = require('./routers/food_route'); // Importing the items router

// Middleware for parsing incoming JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use the router for items-related requests
app.use('/items', itemsRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
