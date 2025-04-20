
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Recipe = require('./../models/Recipes_m');

// Set destination folder and filename logic for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = './Recipe_pic'; // Folder where files will be saved
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique filename
    }
});

const Recipesupload = multer({ storage: storage });

// Create a new item route
router.post('/', Recipesupload.single('thumbnailImage'), async (req, resp) => {
    try {
        const { name, ingredients, recipe, date, time, rating } = req.body;

        // Create the file path (relative to your public folder)
        const photoPath = req.file ? `Recipe_pic/${req.file.filename}` : null;

        // Create a new item instance
        const newRecipe = new Recipe({
            name,
            ingredients,
            recipe,
            thumbnailImage: photoPath,
            date,
            time,
            rating
        });

        // Save the new Recipe to MongoDB
        await newRecipe.save();
        resp.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//get Recipe:
router.get('/', async (req, resp) => {
    try {
        const data = await Recipe.find(); // Fetch all items from the database

        console.log('Data Fetched'.rainbow);

        const host = req.protocol + '://' + req.get('host'); // Dynamically get the host

        // Map the data to ensure the photo URL is returned with the correct full path
        const result = data.map(recipe => {
            if (recipe.thumbnailImage) {
                recipe.thumbnailImage = `Recipe_pic/${recipe.thumbnailImage.split('/').pop()}`; // Construct the full URL
            }
            return recipe;
        });

        resp.status(200).json(result);
    } catch (err) {
        console.error(err);
        resp.status(500).json({ error: 'Internal Server Error' });
    }
});

//update Recipe:
router.put('/:id', async (req, resp) => {
    try {
        const recipeId = req.params.id;
        const updateData = req.body;

        const response = await Recipe.findByIdAndUpdate(recipeId, updateData, {
            new: true,
            runValidators: true,
        })

        if (!response) {
            return resp.status(404).json({ error: 'recipe not found' });
        }
        console.log('data updated'.blue);
        resp.status(200).json(response);

    } catch (err) {
        console.log(err);
        resp.status(500).json({ error: 'Internal Server error' });
    }
})

//Delete Data:
router.delete('/:id', async (req, resp) => {
    try {
        const recipeId = req.params.id;

        const response = await Recipe.findByIdAndDelete(personId);

        if (!response) {
            return resp.status(404).json({ error: 'recipe not found' });
        }
        console.log('Data Deleted'.red);
        resp.status(200).json({ message: 'recipe Delete Successfully' });

    } catch (err) {
        console.log(err);
        resp.status(500).json({ error: 'Internal server error' });
    }
})


module.exports = router;
