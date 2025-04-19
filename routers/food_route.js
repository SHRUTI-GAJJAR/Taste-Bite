
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Items = require('../models/food-items');

// Set destination folder and filename logic for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = './uploads'; // Folder where files will be saved
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

const upload = multer({ storage: storage });

// Create a new item route
router.post('/', upload.single('Thumbnail_img'), async (req, resp) => {
    try {
        const { name, price, Isvage, categories,rating } = req.body;

        // Create the file path (relative to your public folder)
        const photoPath = req.file ? `uploads/${req.file.filename}` : null;

        // Create a new item instance
        const newItem = new Items({
            name,
            price,
            Isvage,
            categories,
            Thumbnail_img: photoPath, // Store the file path in the database
            rating
        });

        // Save the new item to MongoDB
        await newItem.save();
        resp.status(201).json({ message: 'Item created successfully', item: newItem });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/', async (req, resp) => {
    try {
        const data = await Items.find(); // Fetch all items from the database

        console.log('Data Fetched'.rainbow);

        const host = req.protocol + '://' + req.get('host'); // Dynamically get the host

        // Map the data to ensure the photo URL is returned with the correct full path
        const result = data.map(item => {
            if (item.Thumbnail_img) {
                item.Thumbnail_img = `uploads/${item.Thumbnail_img.split('/').pop()}`; // Construct the full URL
            }
            return item;
        });

        resp.status(200).json(result);
    } catch (err) {
        console.error(err);
        resp.status(500).json({ error: 'Internal Server Error' });
    }
});

//find items by name:
router.get('/findByName/:name', async (req, res) => {
    try {
        const name = req.params.name;

        const item = await Items.findOne({ name }); // Find item by name

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        // Update the Thumbnail_img URL if it exists
        if (item.Thumbnail_img) {
            item.Thumbnail_img = `uploads/${item.Thumbnail_img.split('/').pop()}`;
        }

        res.json(item);
    } catch (error) {
        console.error('Error fetching item by name:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

//Search Api:
router.get('/search/:query', async (req, res) => {
    try {
        const query = req.params.query;

        // Use regex for partial and case-insensitive search
        const items = await Items.find({
            name: { $regex: query, $options: 'i' }
        });

        if (!items.length) {
            return res.status(404).json({ message: 'No matching items found' });
        }

        // Format thumbnail paths
        const results = items.map(item => {
            if (item.Thumbnail_img) {
                item.Thumbnail_img = `uploads/${item.Thumbnail_img.split('/').pop()}`;
            }
            return item;
        });

        res.json(results);
    } catch (error) {
        console.error('Error searching items:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



//Find Veg product:
router.get('/type/:isVeg', async (req, resp) => {
    try {
        const isVeg = req.params.isVeg.toLowerCase() === 'true';
        const items = await Items.find({ Isvage: isVeg });

        const result = items.map(item => {
            if (item.Thumbnail_img) {
                item.Thumbnail_img = `uploads/${item.Thumbnail_img.split('/').pop()}`;
            }
            return item;
        });

        resp.status(200).json(result);
    } catch (err) {
        console.error(err);
        resp.status(500).json({ error: 'Internal Server Error' });
    }
});

//category list:
router.get('/categories', async (req, res) => {
    try {
        const categories = await Items.distinct('categories');

        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



//Price under any value:
router.get('/under/:price', async (req, resp) => {
    try {
        const maxPrice = parseFloat(req.params.price);
        if (isNaN(maxPrice)) {
            return resp.status(400).json({ error: 'Invalid price parameter' });
        }

        // Log the query to ensure it's being executed correctly
        console.log(`Querying for items with price < ${maxPrice}`);
        
        const data = await Items.find({ price: { $lt: maxPrice } });

        // Log the results of the query
        console.log('Data fetched:', data);

        if (data.length === 0) {
            console.log(`No items found under ${maxPrice}`);
        }

        const host = req.protocol + '://' + req.get('host');

        const result = data.map(item => {
            if (item.Thumbnail_img) {
                item.Thumbnail_img = `${host}/uploads/${item.Thumbnail_img.split('/').pop()}`;
            }
            return item;
        });

        resp.status(200).json(result);
    } catch (err) {
        console.error('Error fetching items:', err);
        resp.status(500).json({ error: 'Internal Server Error' });
    }
});




//get randome values
router.get('/random-items', async (req, res) => {
    try {
        const allItems = await Items.find(); // Get all items
        const host = req.protocol + '://' + req.get('host');

        // Shuffle the array and take first 15 items
        const shuffled = allItems.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 15);

        const result = selected.map(item => {
            if (item.Thumbnail_img) {
                const filename = item.Thumbnail_img.split('/').pop();
                item.Thumbnail_img = `${host}/uploads/${filename}`;
            }
            return item;
        });

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//get data category wise:
router.get('/category/:category', async (req, resp) => {
    try {
        const category = req.params.category;

        // Find items that match the category
        const data = await Items.find({ categories: category });

        console.log(`Data fetched for category: ${category}`.rainbow);

        const host = req.protocol + '://' + req.get('host');

        // Map the data to update the Thumbnail_img paths
        const result = data.map(item => {
            if (item.Thumbnail_img) {
                item.Thumbnail_img = `${host}/uploads/${item.Thumbnail_img.split('/').pop()}`;
            }
            return item;
        });

        resp.status(200).json(result);
    } catch (err) {
        console.error(err);
        resp.status(500).json({ error: 'Internal Server Error' });
    }
});



//Update Data:
router.put('/:id', async (req, resp) => {
    try {
        const personId = req.params.id;
        const updateData = req.body;

        const response = await Items.findByIdAndUpdate(personId, updateData, {
            new: true,
            runValidators: true,
        })

        if (!response) {
            return resp.status(404).json({ error: 'Items not found' });
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
        const personId = req.params.id;

        const response = await Items.findByIdAndDelete(personId);

        if (!response) {
            return resp.status(404).json({ error: 'Items not found' });
        }
        console.log('Data Deleted'.red);
        resp.status(200).json({ message: 'Items Delete Successfully' });

    } catch (err) {
        console.log(err);
        resp.status(500).json({ error: 'Internal server error' });
    }
})


module.exports = router;
