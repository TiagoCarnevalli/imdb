const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, active: true } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: '1h',
  });
  res.json({ token });
};

module.exports = { login };
