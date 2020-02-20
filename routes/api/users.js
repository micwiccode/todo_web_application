const express = require('express');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

const router = express.Router();

//@route POST /users
router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(404).json({ msg: 'No email or name or password given' });
  } else {
    User.findOne({ email }).then(user => {
      if (user) {
        res.status(400).json({ msg: 'User with that email already exists' });
      } else {
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) throw err;
          else {
            const newUser = new User({
              name: name,
              email: email,
              password: hash,
            });
            newUser
              .save()
              .then(user => {
                jwt.sign(
                  {
                    id: user.id,
                  },
                  config.get('jwtKey'),
                  (err, token) => {
                    if (err) throw err;
                    else {
                      res.json({
                        token,
                        user: {
                          id: user.id,
                          name: user.name,
                          email: user.email,
                        },
                      });
                    }
                  }
                );
              })
              .catch(err => console.log(err));
          }
        });
      }
    });
  }
});

module.exports = router;
