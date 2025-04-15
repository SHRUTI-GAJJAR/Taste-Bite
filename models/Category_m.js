
const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    Category: { type: String, required: true }, 
    CategoryDescription: {type: String, required:true},
    Thumbnail_img: { type: String }
});

const categories = mongoose.model('categories', categoriesSchema);

module.exports = categories;