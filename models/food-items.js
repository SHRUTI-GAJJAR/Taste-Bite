const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    Isvage: { type: Boolean, required: true }, // Assuming this is a boolean, adjust if needed
    categories: { type: String, required: true }, // Adjust this if categories should be something else
    Thumbnail_img: { type: String } // Store the file path to the image
});

const Items = mongoose.model('FoodItem', foodItemSchema);

module.exports = Items;