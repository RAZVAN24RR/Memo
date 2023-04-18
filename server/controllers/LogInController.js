const LogInService = require('../services/LogInService');

exports.signUpUser = async (req, res) => {
  try {
    const {token, error} = await LogInService.login(req.body);
    if (error) {
        console.log('HEREEEEEEEEEEEEEEEEEEEEEEEE,', token);
        res.status(401).json({ error, token: '' });
        return;
    }
    
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};
