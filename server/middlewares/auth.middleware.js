const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const loggedIn = async (req, res, next) => {
    try {
        const token = req.headers['jwt'];
        const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedJwt.userId);
        res.locals.user = user;
    } catch(error) {
        console.error(error);
        res.status(401).send('AUTH_ERR');
        return;
    }
    next();
}

const AuthMiddleware = {
    loggedIn
}

module.exports = AuthMiddleware;