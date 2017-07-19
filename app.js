var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var socket_io = require('socket.io');

var mongoose = require('mongoose');
var index = require('./routes/index');
var user = require('./routes/user');
var wallPosts = require('./routes/wallPosts');

//local MongoDB
mongoose.connect('localhost:27017/test');
var options = {
    server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
    replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}}
};

//mongoLAB, ID:admin, pw: admin
var mongodbUri = 'mongodb://admin:admin@ds135812.mlab.com:35812/socbridge';
// mongoose.connect(mongodbUri, options);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());

app.use(function (req, res, next) { // Allowing CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Set REST routes
app.use('/user', user);
app.use('/posts', wallPosts);

//Catch all other routes and return the index file
app.use('*', index);

//Socket IO + variables
var io = socket_io();
app.io = io;

var roomArr = {};

//Socket.io starts listening ==> all chat logic is here
io.on('connection', function (socket) {
    socket.on('subscribe', function (joiningInfo) {// index 0 = first name. index 1 = room name.
        // // unsubscribe to everything other room
        // for (var property in roomArr) {
        //     if (roomArr.hasOwnProperty(property) && property != joiningInfo[1]) { // if current room is not the room to be joined
        //         //remove user from current room
        //         var userIdxInRoom = roomArr[property].indexOf(joiningInfo[0]);
        //         if (userIdxInRoom != null) { //checks if user is in the room
        //             roomArr[property].splice(userIdxInRoom, 1);
        //             io.in(property).emit('room-info', roomArr[property]);
        //             io.in(property).emit('left-message', joiningInfo[0] + ' has left room: ' + property);
        //             //unplugging socket
        //             console.log(joiningInfo[0] + ' is leaving room ' + property);
        //             socket.leave(property);
        //         }
        //     }
        // }
        // subscribe to particular room
        if (joiningInfo[1] in roomArr) { // room for particular module exist
            if (!roomArr[joiningInfo[1]].includes(joiningInfo[0])) { // user was not in room before
                roomArr[joiningInfo[1]].push(joiningInfo[0]);
            }
            // subscribing to room
            console.log(joiningInfo[0] + ' has joined room:' + joiningInfo[1]);
            socket.join(joiningInfo[1]);
            //emit to all client sockets that a member has joined.
            io.in(joiningInfo[1]).emit('joined-message', joiningInfo[0] + ' has joined room: ' + joiningInfo[1]);
            //emitting to specific client the current member list
            io.in(joiningInfo[1]).emit('room-info', roomArr[joiningInfo[1]]);

        }
        else { // room for particular module does not exist
            roomArr[joiningInfo[1]] = [];
            roomArr[joiningInfo[1]].push(joiningInfo[0]);
            // subscribing to room
            console.log(joiningInfo[0] + ' has joined room:' + joiningInfo[1]);
            socket.join(joiningInfo[1]);
            //emit to all client sockets that a member has joined.
            io.in(joiningInfo[1]).emit('joined-message', joiningInfo[0] + ' has joined room: ' + joiningInfo[1]);
            //emitting to specific client the current member list
            io.in(joiningInfo[1]).emit('room-info', roomArr[joiningInfo[1]]);
        }
    });
    socket.on('unsubscribe', function (leavingInfo) {//index 0 = first name. index 1 = room name.
        for (var property in roomArr) {
            var index = roomArr[property].indexOf(leavingInfo);
            if(index >= 0) {
                roomArr[property].splice(index, 1);
                socket.leave(property);
                io.in(property).emit('user-left', leavingInfo);
            }
        }
    });
    socket.on('send', function (data) {
        console.log('sending message');
        io.in(data.room).emit('message', data.message);
    });
    socket.on('leave-all', function (userFirstName) {
        for (var property in roomArr) {
            //removing from property arr
            var userIdxInRoom = roomArr[property].indexOf(userFirstName);
            if (userIdxInRoom != null) {
                roomArr[property].splice(userIdxInRoom, 1);
                io.in(property).emit('room-info', roomArr[property]);
                io.in(property).emit('left-message', userFirstName + ' has left room: ' + property);
                //unplugging socket
                console.log(userFirstName + ' is leaving room ' + property);
                socket.leave(property);
            }
        }
    });
});


//Catch all other routes and return the index file
// app.get('/', function(req, res) {
//     app.use(express.static(path.join(__dirname, 'dist')));
// });


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
