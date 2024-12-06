const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;
  
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }
  
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create a new user
    const user = new User({ fullName,email, password: hashedPassword });
    await user.save();
  
    res.status(201).json({ message: 'User created successfully' });
  });
  
  // Login route
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    // Check if password matches
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
  
    res.status(200).json({ token, message: 'Login successful' });
  });
  
  module.exports = router;
