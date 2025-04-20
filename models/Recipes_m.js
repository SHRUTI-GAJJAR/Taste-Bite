const mongoose = require('mongoose');

const recipeModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        default: []
    },
    recipe: {
        type: [String]
    },
    thumbnailImage: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },

    time: {
        type: String,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    }
});

recipeModelSchema.pre('save', function (next) {
    const now = new Date();

    if (!this.date || this.date.trim() === "") {
        this.date = now.toLocaleDateString('en-GB'); // e.g., "19/04/2025"
    }

    if (!this.time || this.time.trim() === "") {
        this.time = now.toLocaleTimeString('en-GB'); // e.g., "14:05:20"
    }

    next();
});

const Recipe = mongoose.model('Recipe', recipeModelSchema);
module.exports = Recipe;

