var express = require('express');
var router = express.Router();

var bcrypt = require('bcryptjs');
var jwt  = require('jsonwebtoken');
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var User = require('../models/user');
var Module = require('../models/module');
var Post = require('../models/post');
var Comment = require('../models/comment');


// Template
// router.post('/newPost', function(req,res,next) {
//     jwt.verify(req.query.token, 'secret', function(err, decoded) {
//         if(err) {//user not authenticated
//             return res.status(401).json({
//                 title: "Not Authenticated",
//                 error: err
//             });
//         }
//         User.findById(decoded.user._id, function(err, user) {
//
//         });
//     });
// });



//Add new post route
router.post('/newPost', function(req,res,next) {
   jwt.verify(req.query.token, 'secret', function(err, decoded) {
       if(err) {//user not authenticated
           return res.status(401).json({
               title: "Not Authenticated",
               error: err
           });
       }
       User.findById(decoded.user._id, function(err, user) {
           if(err) {
               console.log('User not found');
               return res.status(401).json({
                   title: "User Not found",
                   error: err
               });
           }
           Module.findOne({module_code: req.body.mod})
               .exec(function(err, mod) {
                   if(err) {
                       console.log('Module');
                       return res.status(401).json({
                           title: "Module Not found",
                           error: err
                       });
                   }
                   var newPost = new Post({
                       title: req.body.title,
                       content: req.body.content,
                       user: user._id,
                       module: mod._id
                   });
                   newPost.save(function(err, result) {
                       if(err) {
                           console.log('fail to save new post');
                       }
                       mod.posts.push(newPost._id);
                       mod.save(function(err, result) {
                           if(err) {
                               console.log('fail to save mod');
                           }
                       })
                   })
               });

       });
       return res.status(201).json({
           message: 'module add successfully'
       });
   });
});


router.post('/newComment', function(req,res,next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if(err) {//user not authenticated
            return res.status(401).json({
                title: "Not Authenticated",
                error: err
            });
        }
        User.findById(decoded.user._id)
            .exec(function(err, user) {
            if(err) {
                return res.status(400).json({
                    message: "User not found",
                    error: err
                });
            }
            Post.findById(req.body.post, function(err, post){
                    if(err) {
                        return res.status(400).json({
                            message: "Post not found",
                            error: err
                        });
                    }
                    var comment = new Comment({
                        user: user._id,
                        content: req.body.content,
                        post: post._id
                    });
                    comment.save(function(err, result) {
                        if(err) {
                            console.log("fail to save new comment")
                        }
                    });
                    post.comments.push(comment._id);
                    post.save(function(err,result) {
                       if(err) {
                           console.log("fail to update post");
                       }
                    });
            });
        });
    });
});









module.exports = router;