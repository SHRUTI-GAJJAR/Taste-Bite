const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

const mongoURI = process.env.MONGO_ATLAS_URL; // MongoDB Atlas URI

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Database Server'.green);
  } catch (err) {
    console.error('MongoDB Connection Error:'.red, err);
    process.exit(1); // Exit the process if connection fails
  }
};

// Event listeners
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongodb connected'.green);
});

db.on('error', (err) => {
  console.log('Mongodb Connection Error:'.red, err);
});

db.on('disconnected', () => {
  console.log('Mongodb disconnected'.red);
});

// Gracefully handle shutdowns
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to application termination'.red);
  process.exit(0); // Exit gracefully
});

module.exports = connectDB;
