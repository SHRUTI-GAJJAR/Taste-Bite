
const express = require('express');
const multer = require('multer');
const path = require('path');
const Recipe = require('./../models/Recipes_m'); // Your Recipe model
const auth = require('./../middleware/authMiddleware');  // Authentication middleware
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'Recipe_pic/');  // Folder to save images (make sure this folder exists)
  },
  filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);  // Get the file extension
      cb(null, Date.now() + ext);  // Unique filename based on current timestamp
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('thumbnailImage'), async (req, resp) => {
  try {
      const { name, ingredients, recipe, date, time, rating, user } = req.body;

      // Create the file path (relative to your public folder)
      const photoPath = req.file ? `Recipe_pic/${req.file.filename}` : null;

      // Create a new recipe item instance (no need for user authentication)
      const newRecipe = new Recipe({
          name, 
          ingredients,
          recipe,
          thumbnailImage: photoPath,
          date,
          time,
          rating,
          user: user || null // You can make 'user' optional if you want
      });

      // Save the new recipe to MongoDB
      await newRecipe.save();
      resp.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
  } catch (err) {
      console.error(err);
      resp.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, resp) => {
  try {
      // Fetch all recipes from the database
      const recipes = await Recipe.find();

      // Return the list of recipes with status 200
      resp.status(200).json({ message: 'Recipes retrieved successfully', recipes });
  } catch (err) {
      console.error(err);
      resp.status(500).json({ error: 'Internal Server Error' });
  }
});




module.exports = router;