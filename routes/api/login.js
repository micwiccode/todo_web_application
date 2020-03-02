const express = require('express');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

const router = express.Router();

//@route POST /login
router.post('/', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: 'No email or name or password given' });
  } else {
    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(400).json({ msg: 'User does not exist' });
      } else {
        bcrypt
          .compare(password, user.password, (err, isValid) => {
            if (err) console.log(err);
            if (!isValid) res.status(400).json({ msg: 'Invalid password' });
            else {
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
                        _id: user.id,
                        name: user.name,
                        email: user.email,
                      },
                    });
                  }
                }
              );
            }
          })
          // .catch(err => console.log(err));
      }
    });
  }
});

module.exports = router;


