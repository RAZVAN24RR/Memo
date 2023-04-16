const LogInService = require('../services/LogInService');

exports.signUpUser = async (req, res) => {
  try {
    const token = await LogInService.login(req.body);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};
