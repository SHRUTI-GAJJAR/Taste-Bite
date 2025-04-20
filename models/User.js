
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,  // This will store the image URL or file path
        default: ''    // Optional: set a default avatar if you want
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
