const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const UserService = require('../services/UserService');

const isloggedIn = async (req, res, next) => {
  try {
    let token = JSON.parse(req.headers.authorization);
    const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserService.getUser(decodedJwt.userId);
    res.locals.user = user;
  } catch (error) {
    console.error(error);
    res.status(401).send('AUTH_ERR');
    return;
  }
  next();
};

const AuthMiddleware = {
  isloggedIn
};

module.exports = AuthMiddleware;
