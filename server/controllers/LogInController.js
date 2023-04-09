const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
exports.signUpUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username an password.' });
    }
    const isPasswordValid = password === user.password;
    console.log(email);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }
    const token = jwt.sign({ userId: user._id }, 'secret');
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};
