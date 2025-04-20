
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const User = require('./../models/User');
const auth = require('./../middleware/authMiddleware');
const router = express.Router();

// Set up Multer for image storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'profile/'); // Folder to save images
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext); // Unique filename
    }
});

const upload = multer({ storage: storage });

router.post('/register', upload.single('profilePhoto'), async (req, res) => {
    const { name, email, password } = req.body;
    const profilePhoto = req.file ? req.file.filename : null;

    console.log('Uploaded file:', req.file);

    try {
        const hashed = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashed,
            profilePhoto
        });
        await user.save();

        res.json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                profilePhoto: `/profile/${user.profilePhoto}` // full path to photo
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Registration failed', details: err.message });
    }
});



// Login route
router.post('/log-in', async (req, res) => {
    const { email, password } = req.body; // Only email and password are needed for login
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1d' });
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                profilePhoto: user.profilePhoto
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Login failed', details: err.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-password'); // exclude password for security

        // Add full path for profile photo
        const usersWithPhotoPath = users.map(user => ({
            id: user._id,
            name: user.name,
            email: user.email,
            profilePhoto: user.profilePhoto ? `/profile/${user.profilePhoto}` : null
        }));

        res.json({
            message: 'Users fetched successfully',
            users: usersWithPhotoPath
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users', details: err.message });
    }
});
module.exports = router;
