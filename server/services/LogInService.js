const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

const login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
      return { error: 'WRONG_EMAIL' };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { error: 'WRONG_PASSWORD' };
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    return { token };
}

const LogInService = {
    login
}
module.exports = LogInService;