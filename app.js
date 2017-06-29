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
var chat = require('./routes/chat');

//local MongoDB
// mongoose.connect('localhost:27017/test');
var options = {
server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};

//mongoLAB, ID:admin, pw: admin
var mongodbUri = 'mongodb://admin:admin@ds135812.mlab.com:35812/socbridge';
mongoose.connect(mongodbUri, options);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(cookieParser());

app.use(function(req, res, next) { // Allowing CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Set REST routes
app.use('/user', user);
app.use('/posts', wallPosts);
app.use('/chat', chat);

//Catch all other routes and return the index file
app.use('*', index);

//Socket IO
var io = socket_io();
app.io = io;

//Socket.io starts listening
io.on('connection', function(socket) {
   console.log('A user connected');

   //methods for the particular instance of socket
   socket.on('new message', function(msg) {
       console.log('new message: ' + msg);
       app.io.emit('chat message', msg);
   })

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
