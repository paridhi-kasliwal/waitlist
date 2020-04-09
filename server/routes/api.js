const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET api listing. */
router.get('/users', (req, res) => {
  console.log('ingetuesr');
    User.find().then(rec => {
      if(rec) {
        console.log('get users', rec);
        res.status(200).json(rec);
      } else {
        res.status(200).json([]);
      }
    })
});

router.post('/subscribe-user', async (req, res) => {
  console.log('REQUSET', req.body);
  // create a new user
  var newUser = User({
    email: req.body.email,
    referralLink: 'paridhi@gmail.com',
    position: 1,
  });
  newUser
    .save()
    .then(result => {
      console.log(result);
      console.log('Created User');
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;