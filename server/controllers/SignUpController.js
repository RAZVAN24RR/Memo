const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
exports.createUser = async (req, res) => {
  try {
    let { name, email, password, rank } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    password = hashedPassword;
    let user = new User({
      name,
      email,
      password,
      rank
    });
    await user.save();
    res.status(201).json({
      message: 'User registered successfully.'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};
