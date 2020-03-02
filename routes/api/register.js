const express = require('express');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

const router = express.Router();

//@route POST /register
router.post('/', (req, res) => {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const { name, email, password, repeatPassword } = req.body;
  if (!name || !email || !password || !repeatPassword) {
    res.status(404).json({ msg: 'No email or name or password given' });
  } else if (password !== repeatPassword) {
    return res.status(400).json({ msg: 'Passwords are not the same' });
  } else if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: 'Passwords should have min 6 characters' });
  } else if (!email.match(emailFormat)) {
    return res.status(400).json({ msg: 'Email is incorrect' });
  } else {
    User.findOne({ email }).then(user => {
      if (user) {
        res.status(400).json({ msg: 'User with that email already exists' });
      } else {
        const saltRounds = 5;
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
                  { expiresIn: 1800 },
                  (err, token) => {
                    if (err) throw err;
                    else {
                      res.json({
                        token,
                        user: {
                          _id: user.id,
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
