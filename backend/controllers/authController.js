const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'mySecret123';

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ error: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id , name: user.name}, JWT_SECRET, { expiresIn: '1h' });
    

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'Lax',
      secure: false,
      maxAge: 24 * 60 * 60 * 1000  // 1 day in milliseconds
    });
    
    


    

    return res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
};

exports.checkSession = (req, res) => {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({ error: 'Not logged in' });

  try {
    const data = jwt.verify(token, JWT_SECRET);
    res.json({ userId: data.id , name : data.name});
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
