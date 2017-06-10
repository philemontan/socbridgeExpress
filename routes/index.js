var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.sendfile('views/index2.html');
// });

router.get('/', function(req,res,next){
    res.sendfile('../views/index.html');
})


router.post('/', function(req,res,next){
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
    res.redirect('/');
});



module.exports = router;
