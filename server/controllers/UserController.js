const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const UserService = require('../services/UserService');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    res.status(400).end();
  }
};
exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUser(id);
    res.status(200).json({
      status: 'success',
      user
    });
  } catch (err) {
    res.status(400).end();
  }
};
exports.createUser = async (req, res) => {
  try {
    await UserService.createUser(req.body);
    res.status(201).send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};
exports.updateUserSkills = async (req, res) => {
  try {
    await UserService.updateUserSkills(res.locals.user._id, req.body);
    res.status(200).send('OK')
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};
exports.deleteUser = async (req, res) => {
    try {        
        if (String(res.locals.user._id) === req.params.id || res.locals.user.years >= 1) {
            await UserService.deleteUser(req.params.id);
            res.status(204).send('OK');
            return;
        }
        
        res.status(401).end();
    } catch(err) {
        console.log(err);
        res.status(500).end();
    }
}