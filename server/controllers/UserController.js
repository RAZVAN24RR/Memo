const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const { convertMillisecondsToYearsAndMonths } = require('../utils/time.utils');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });

    console.log(users);
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, { password: 0 }).lean();
    const date = new Date(user.createdAt);
    const diff = Date.now() - date.getTime();
    const { months, years } = convertMillisecondsToYearsAndMonths(diff);
    console.log('ERRRR:', user);

    res.status(200).json({
      status: 'success',
      user: { ...user, months, years }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent'
    });
  }
};
exports.createUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    password = hashedPassword;
    let user = new User({
      name,
      email,
      password
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
