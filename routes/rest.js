var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Module = require('../models/module');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendfile('views/index3.html');
});

// Post a new user to the server

router.post('/newUser', function(req,res,next){
    var email = req.body.email;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var password = req.body.password;
    var course = req.body.course;

    var user = new User({
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        course: course
    });
    user.save();

});

//adding a new module object
router.post('/newModule', function(req,res,next){
    var code = req.body.content;
    var name = 'Data Structures and Algorithms I';
    var mod = new Module({
        code: code,
        name: name
    });
    mod.save(function(err, result) {
        if(err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved new Module',
            obj: result
        })
    });
});


module.exports = router;