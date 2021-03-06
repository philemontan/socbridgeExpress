var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Module = require('../models/module');
var bcrypt = require('bcryptjs');
var jwt  = require('jsonwebtoken');
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var request = require('request');

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
            var tokenPayload = { _id : user._id};
            var token = jwt.sign({user: tokenPayload}, 'secret', {expiresIn: 7200});
            return res.status(200).json({
                message: 'Successfully logged in',
                token: token,
                userId: user._id,
                userObj: JSON.stringify(user)
            });
        })
});

// //populate route
// router.post('/populate', function(req,res,next) {
//     var initialRes = res;
//     jwt.verify(req.query.token, 'secret', function(err, decoded) {
//         if(err) {//user not authenticated
//             return res.status(401).json({
//                 title: "Not Authenticated",
//                 error: err
//             });
//         }
//         request.get(req.body, function(err, res, body) {
//            if(err) {
//                console.log('IVLE API call error');
//                return res.status(400).json({
//                   message:'call to lapi failed'
//                });
//            }
//            var ivleRetrievedModules = {
//                modules: []
//            };
//            var jsonObj = JSON.parse(body);
//            var result = jsonObj.Results;
//            // const result = res.json()['Results'];
//            for(var i=0; i<result.length; i++) {
//                var mod = result[i];
//                ivleRetrievedModules.modules.push(mod['CourseCode']);
//            }
//            User.findById(decoded.user._id, function(err, user) {
//                if(err) {
//                    console.log('User find error');
//                    return res.status(500).json({
//                        title: 'An error occured',
//                        error: err
//                    });
//                }
//                if(!user) {
//                    console.log('User not available');
//                    return res.status(500).json({
//                        title: 'userfind failed',
//                        error: {message: 'User not found'}
//                    });
//                }
//                var modStringArr = ivleRetrievedModules.modules;
//                var arrLength = modStringArr.length;
//
//                modStringArr.forEach(function(modCode) {
//                    Module.findOne({module_code: modCode})
//                        .exec(function(err, mod) {
//                            if(mod===null) {
//                                var newModule = new Module({
//                                    module_code: modCode,
//                                    name: 'tempName',
//                                    members: [user._id],
//                                    posts:[]
//                                });
//                                newModule.save(function(err, result) {
//                                    if(err) {
//                                        console.log('failed to save ew mod');
//                                    }
//                                });
//                                user.modules.push(newModule._id);
//                                console.log('saving mod//nullmod' + modCode);
//                                arrLength--;
//                                if(arrLength===0) {
//                                    user.save(function(err, user) {
//                                        if(err) {
//                                            console.log('user save failed');
//                                        }
//                                        else {
//                                            console.log('user saved');
//                                        }
//                                    });
//                                    User.findOne({_id: decoded.user._id})
//                                        .populate({
//                                            path: 'modules',
//                                            populate: {
//                                                path: 'posts',
//                                                populate: {
//                                                    path: 'user comments',
//                                                    populate: {
//                                                        path: 'user'
//                                                    }
//                                                }
//                                            }
//                                        })
//                                        .exec(function(err, user) {
//                                            console.log('finish populated, sending back objs');
//                                            var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
//                                            return res.status(201).json({
//                                                message: 'populated successfully',
//                                                token: token,
//                                                userId: user._id,
//                                                userObj: JSON.stringify(user)
//                                            })
//                                        });
//                                }
//                            }
//                            if(mod) {
//                                mod.members.push(user._id);
//                                mod.save(function(err, result) {
//                                    if(err) {
//                                        console.log('failed to update existing mod');
//                                    }
//                                });
//                                user.modules.push(mod._id);
//                                console.log('saving mod//existing mod' + modCode);
//                                arrLength--;
//                                if(arrLength===0) {
//                                    user.save(function(err, user) {
//                                        if(err) {
//                                            console.log('user save failed');
//                                        }
//                                        else {
//                                            console.log('user saved');
//                                        }
//                                    });
//                                    User.findOne({_id: decoded.user._id})
//                                        .populate({
//                                            path: 'modules',
//                                            populate: {
//                                                path: 'posts',
//                                                populate: {
//                                                    path: 'user comments',
//                                                    populate: {
//                                                        path: 'user'
//                                                    }
//                                                }
//                                            }
//                                        })
//                                        .exec(function(err, user) {
//                                            console.log('finish populated, sending back objs');
//                                            var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
//                                            return initialRes.status(201).json({
//                                                message: 'populated successfully',
//                                                token: token,
//                                                userId: user._id,
//                                                userObj: JSON.stringify(user),
//                                                moduleArrObj: ivleRetrievedModules
//                                            })
//                                        });
//                                }
//                            }
//                        });
//                });
//
//            });
//         });
//     });
// });

router.post('/populate', function(req,res,next) {
    var initialRes = res;
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if(err) {//user not authenticated
            return res.status(401).json({
                title: "Not Authenticated",
                error: err
            });
        }
        request.get(req.body, function(err, res, body) {
            if(err) {
                console.log('IVLE API call error');
                return res.status(400).json({
                    message:'call to lapi failed'
                });
            }
            var ivleRetrievedModules = {
                modules: []
            };
            var ivleRetrievedModules1 = {
                modules: []
            };
            var jsonObj = JSON.parse(body);
            var result = jsonObj.Results;
            console.log(jsonObj);
            console.log(' ');
            console.log(result);
            // const result = res.json()['Results'];
            for(var i=0; i<result.length; i++) {
                var mod = result[i];
                ivleRetrievedModules.modules.push(mod['CourseCode']);
                ivleRetrievedModules1.modules.push(mod['CourseCode'] + ': ' + mod['CourseName']);
            }
            User.findById(decoded.user._id, function(err, user) {
                if(err) {
                    console.log('User find error');
                    return res.status(500).json({
                        title: 'An error occured',
                        error: err
                    });
                }
                if(!user) {
                    console.log('User not available');
                    return res.status(500).json({
                        title: 'userfind failed',
                        error: {message: 'User not found'}
                    });
                }
                var modStringArr = ivleRetrievedModules.modules;
                var arrLength = modStringArr.length;

                modStringArr.forEach(function(modCode) {
                    Module.findOne({module_code: modCode})
                        .exec(function(err, mod) {
                            if(mod) { // mod already exist or was just created.
                                mod.members.push(user._id);
                                mod.save(function(err, result) {
                                    if(err) {
                                        console.log('failed to update existing mod');
                                    }
                                });
                                user.modules.push(mod._id);
                                console.log('saving mod//existing mod' + modCode);
                                arrLength--;
                                if(arrLength===0) {
                                    user.save(function(err, user) {
                                        if(err) {
                                            console.log('user save failed');
                                        }
                                        else {
                                            console.log('user saved');
                                        }
                                        User.findOne({_id: decoded.user._id})
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
                                                console.log('finish populated, sending back objs');
                                                var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
                                                return initialRes.status(201).json({
                                                    message: 'populated successfully',
                                                    token: token,
                                                    userId: user._id,
                                                    userObj: JSON.stringify(user),
                                                    moduleArrObj: ivleRetrievedModules1
                                                })
                                            });
                                    });
                                }
                            }
                            else if(mod===null) { // mod does not exist, create new mod, add to user
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
                                console.log('saving mod//nullmod' + modCode);
                                arrLength--;
                                if(arrLength===0) {
                                    user.save(function(err, user) {
                                        if(err) {
                                            console.log('user save failed');
                                        }
                                        else {
                                            console.log('user saved');
                                        }
                                        User.findOne({_id: decoded.user._id})
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
                                                console.log('finish populated, sending back objs');
                                                var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
                                                return initialRes.status(201).json({
                                                    message: 'populated successfully',
                                                    token: token,
                                                    userId: user._id,
                                                    userObj: JSON.stringify(user),
                                                    moduleArrObj: ivleRetrievedModules1
                                                })
                                            });
                                    });
                                }
                            }
                        });
                });
            });
        });
    });
});






module.exports = router;