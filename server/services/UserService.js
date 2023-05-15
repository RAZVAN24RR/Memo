const User = require('../models/UserModel');
const { convertMillisecondsToYearsAndMonths } = require('../utils/time.utils');
const bcrypt = require('bcrypt');

const getAllUsers = async () => {
  return await User.find({}, { password: 0 });
};

const getUser = async id => {
  const user = await User.findById(id, { password: 0 }).lean();
  const date = new Date(user.createdAt);
  const diff = Date.now() - date.getTime();
  const { months, years } = convertMillisecondsToYearsAndMonths(diff);
  return { ...user, months, years };
};

const createUser = async ({ name, email, password }) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  let user = new User({
    name,
    email,
    password: hashedPassword
  });
  await user.save();
};

const updateUserSkills = async (id, data) => {
  await User.findByIdAndUpdate(id, data, {
    new: true
  });
};

const deleteUser = async targetId => {
  await User.deleteOne({ _id: targetId });
};

const UserService = {
  getAllUsers,
  getUser,
  createUser,
  updateUserSkills,
  deleteUser
};

module.exports = UserService;
