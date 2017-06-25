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
                   newPost.save(function(err,savedDoc,result) {
                       if(err) {
                           console.log('fail to save new post');
                       }
                       mod.posts.push(newPost._id);
                       mod.save(function(err, result) {
                           if(err) {
                               console.log('fail to save mod');
                           }
                       });
                       return res.status(201).json({
                           message: 'Post add successfully',
                           postId: savedDoc._id
                       });
                   })
               });

       });
       // return res.status(201).json({
       //     message: 'module add successfully'
       // });
   });
});

//Add new comment route
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

//Edit Post Route
router.post('/editPost', function(req,res,next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if(err) {//user not authenticated
            return res.status(401).json({
                title: "Not Authenticated",
                error: err
            });
        }
        Post.findById(req.body.id, function(err, post) {
            if(err) {
                console.log("fail to find post");
                return res.status(401).json({
                    title: "Post not found",
                    error: err
                });
            }
            post.title = req.body.title;
            post.content = req.body.content;
            post.save(function(err, result) {
               if(err) {
                   console.log("fail to update post");
                   return res.status(401).json({
                       title: "fail to update post",
                       error: err
                   });
               }
               return res.status(202).json({
                    title: "post updated",
                    post: post
               })
            });
        });
    });
});

//Delete Post Route
router.post('/deletePost', function(req,res,next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if(err) {//user not authenticated
            return res.status(401).json({
                title: "Not Authenticated",
                error: err
            });
        }
        Post.findById(req.body.id, function(err, post) {
            if(err) {
                console.log("Post not Found -- id is null");
                Post.findOne({content: req.body.content}, function(err, post) {
                    if(err) {
                        console.log("id null & post not found");
                    } else {
                        //remove from module
                        Module.findById(post.module, function(err, module) {
                            if(err) {
                                console.log("Module not Found");
                            }
                            module.posts.remove(post._id);
                            module.save(function(err, result) {
                                if(err) {
                                    console.log("unable to remove from module");
                                }
                            });
                        });
                        //delete all comments
                        post.comments.forEach(function(commentId) {
                            Comment.findByIdAndRemove(commentId, function(err, comment) {
                                if(err){
                                    console.log("unable to remove comment");
                                }
                            });
                        });
                        //delete post itself
                        post.remove();
                        return res.status(202).json({
                            title: "post deleted",
                            post: post
                        })
                    }
                });
            } else {
                //remove from module
                Module.findById(post.module, function (err, module) {
                    if (err) {
                        console.log("Module not Found");
                    }
                    module.posts.remove(req.body.id);
                    module.save(function (err, result) {
                        if (err) {
                            console.log("unable to remove from module");
                        }
                    });
                });
                //delete all comments
                post.comments.forEach(function (commentId) {
                    Comment.findByIdAndRemove(commentId, function (err, comment) {
                        if (err) {
                            console.log("unable to remove comment");
                        }
                    });
                });
                //delete post itself
                post.remove();
                return res.status(202).json({
                    title: "post deleted",
                    post: post
                });
            }
        });
    });
});








module.exports = router;