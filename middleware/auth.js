const config = require('config');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token') || req.body.headers['x-auth-token'];
  if (!token) return res.status(401).json('Access denied. No token');
  jwt.verify(token, config.get('jwtKey'), (err, decoded) => {
    if (err) res.status(401).json('Invalid token');
    req.user = decoded;
    next();
  });
};

module.exports = auth;
