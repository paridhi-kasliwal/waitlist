const express = require('express');
const router = express.Router();
const User = require('../models/user');

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

router.delete('/users', (req, res) => {
  console.log('ingetuesr');
    User.deleteMany({email: 'paridhi@gmail.com'}).then(rec => {
      if(rec) {
        console.log('get users', rec);
        res.status(200).json(rec);
      } else {
        res.status(200).json([]);
      }
    })
});

router.post('/subscribe-user', async (req, res) => {
  User.find({email: req.body.email}, function(err, user){
      if(err) {
        return next(err);
      } else {
        if(user.length) {
          let obj = {};
          obj['result'] = user[0];
          obj['is_new_user'] = false;
          obj['message'] = 'User already exists';
          res.status(200).json({result: obj});
        } else {
          // create a new user
          User.countDocuments({}, function(err, count) {
            if (err) {
              console.log(err);
            } else {
              if(req.body.referralId) {
                User.findOneAndUpdate({ _id: req.body.referralId}, { $inc: { referralCount : 1 } }, function(err, result) {
                  if(err){
                      res.send(err);
                  } else{
                     console.log('***', result);
                  }
                })
              }

              var newUser = User({
                email: req.body.email,
                position: count + 1,
                referralCount: 0
              });
              newUser
                .save()
                .then(result => {
                  let user = {result};
                  user['is_new_user'] = true;
                  user['message']= 'New User';
                  res.status(200).json({result: user});
                })
                .catch(err => {
                  console.log(err);
                }
              );
            }
          });
        }
      }  
    }) 
});

router.get('/leaders', (req, res) => {
  User.find().sort({referralCount: -1}).limit(3).then(rec => {
    if(rec) {
      res.status(200).json(rec);
    } else {
      res.status(200).json([]);
    }
  })
});

module.exports = router;