const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//Test
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const User = require('../models/UserModel');
//Test

const User = require('./models/UserModel');

//Routers
const userRouter = require('./routes/UserRoutes');
const loginRouter = require('./routes/LogInRouter');

const app = express();

// Middlewares

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋!');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes

app.use('/api/v1/users', userRouter);
app.use('/api/v1/LogIn', loginRouter);

module.exports = app;
