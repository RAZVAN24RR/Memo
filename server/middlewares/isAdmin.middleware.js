const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const UserService = require('../services/UserService');

const isManager = async (req, res, next) => {
  try {
    const token = JSON.parse(req.headers.authorization);
    const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserService.getUser(decodedJwt.userId);
    console.log(user);
    if (user.isManager !== true) res.status(401).send('AUTH_ERR');
  } catch (error) {
    console.error(error);
    res.status(401).send('AUTH_ERR');
    return;
  }
  next();
};

const AdminMiddleware = {
  isManager
};

module.exports = AdminMiddleware;
