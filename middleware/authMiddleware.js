const jwt = require('jsonwebtoken');
const User = require('./../models/User');

const auth = async (req, res, next) => {
  try {
      const token = req.header('Authorization').replace('Bearer ', '');  // Extract token from header
      const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token

      const user = await User.findOne({ _id: decoded._id });  // Find user based on the token
      if (!user) {
          throw new Error();
      }

      req.user = user;  // Attach the user to the request object
      next();  // Proceed to the next middleware
  } catch (e) {
      res.status(401).send({ error: 'Please authenticate.' });  // Send an authentication error if token is invalid
  }
};

module.exports = auth;

