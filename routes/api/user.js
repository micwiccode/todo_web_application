const express = require('express');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

const router = express.Router();

//Get user data
//@route GET /user
router.get('/', auth, (req, res) => {
  User.findById(req.user.id)
    .select('name && email && dateOfRegistration')
    .then(user => res.json(user))
    .catch(error => res.status(400).json({ msg: error.message }));
});

module.exports = router;