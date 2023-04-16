const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

const login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username an password.' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }
    const token = jwt.sign({ userId: user._id }, 'secret');
    return token;
}

const LogInService = {
    login
}
module.exports = LogInService;