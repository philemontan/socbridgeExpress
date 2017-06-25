var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Module = require('../models/module');
var bcrypt = require('bcryptjs');
var jwt  = require('jsonwebtoken');
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

// Sign up route
router.post('/signUp', function(req,res,next) {
    var email = req.body.email;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var password = req.body.password;
    var course = req.body.course;

    var newUser = new User({
        firstName: firstName,
        lastName: lastName,
        password: bcrypt.hashSync(password, 10),
        email: email,
        course: course
    });

    newUser.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred -- Email already in use',
                error:err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        })
    });
});


// Sign in route
router.post('/signIn', function(req, res) {
    User.findOne({email: req.body.email})
        // .populate('modules')
        .populate({
            path: 'modules',
            populate: {
                path: 'posts',
                populate: {
                    path: 'user comments',
                    populate: {
                        path: 'user'
                    }
                }
            }
        })
        .exec(function(err, user) {
            if(err) { // check for generic error
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            if (!user) { // checking if user exist
                return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid login credentials'}
                })
            }
            if(!bcrypt.compareSync(req.body.password, user.password)) { // password comparison returns false
                return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid login credentials'}
                })
            }
            //create & return auth token
            var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
            return res.status(200).json({
                message: 'Successfully logged in',
                token: token,
                userId: user._id,
                userObj: JSON.stringify(user)
            });
        })
});

//populate route
router.post('/populate', function(req, res) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
      if(err) {
          return res.status(401).json({
              title: 'Not Authenticated',
              error: err
          });
      }
      User.findById(decoded.user._id, function(err, user) {
          if(err) {
              return res.status(500).json({
                  title: 'An error occured',
                  error: err
              });
          }
          if(!user) {
              return res.status(500).json({
                  title: 'userfind failed',
                  error: {message: 'User not found'}
              });
          }
          var modStringArr = req.body.modules;
          modStringArr.forEach(function(modCode) {
              Module.findOne({module_code: modCode})
                  .exec(function(err, mod) {
                      if(mod===null) {
                          var newModule = new Module({
                              module_code: modCode,
                              name: 'tempName',
                              members: [user._id],
                              posts:[]
                          });
                          newModule.save(function(err, result) {
                              if(err) {
                                  console.log('failed to save ew mod');
                              }
                          });
                          user.modules.push(newModule._id);
                      }
                      if(mod) {
                          mod.members.push(user._id);
                          mod.save(function(err, result) {
                              if(err) {
                                  console.log('failed to update existing mod');
                              }
                          });
                          user.modules.push(mod._id);
                      }
                  });
          });
          user.save();
          User.findById(decoded.user._id)
              .populate({
                  path: 'modules',
                  populate: {
                      path: 'posts',
                      populate: {
                          path: 'user comments',
                          populate: {
                              path: 'user'
                          }
                      }
                  }
              })
              .exec(function(err, user) {
                  return res.status(201).json({
                      message: 'populated successfully',
                      userObj: JSON.stringify(user)
                  })
              });
      });
    });
});

module.exports = router;