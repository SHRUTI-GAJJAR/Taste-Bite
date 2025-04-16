

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./db');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const bodyParser = require('body-parser');
const itemsRouter = require('./routers/food_route'); // Importing the items router
const CategoryRouter = require('./routers/categories_route')

// Middleware for parsing incoming JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// For Items
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/items', itemsRouter);

//For category
app.use('/Category', express.static(path.join(__dirname, 'Category')));
app.use('/Categories', CategoryRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.green);
});
