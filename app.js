// // Libraries
// var io      =   require('socket.io'),
//     http    =   require('http'),
//     express =   require('express'),
//     sugar = require('sugar'),
//     socketControl = require('./socket_control.js');

// //  Variables
//     app = null,
//     classrooms = [],
//     users = [];

// // Create Express
// app = express();

// // Create HTTP server and socket.io
// server = http.createServer(app);
// server.listen(2052);
// io = io.listen(server);

// // Handle all socket routines in socketControl
// socketControl.init(io, {
//     classrooms: classrooms, 
//     users: users
// });


// //* //////////////////////////////////////////
// //
// //  Routing
// //
// //* //////////////////////////////////////////

// // Secured APIs
// app.get('/api', apiSecure, function (req, res) {
//     var request = req.query.request;

//     console.log("in api:");

//     switch (request) {
//     case "user-count":
//         res.send(getUserCount(req.query));
//         break;
//     case "msg-broadcast":
//         res.send(msgBroadcast(req.query));
//         break;
//     case "registration":
//         res.send(register(req.query));
//         break;
//     case "users-in-classroom":
//         res.send(usersInClassroom(req.query));
//         break;
//     default:
//         res.send("Unknown API request");
//     }
// });

// // Public APIs
// app.get('/api/user-count', function (req, res) {
//     res.send(getUserCount(req.query));
// });

// app.get('/api/test', function (req, res) {
//     res.send("YAA!!!");
// });




// //* //////////////////////////////////////////
// //
// //  APIs
// //
// //* //////////////////////////////////////////

// function apiSecure(req, res, next) {
//     // var user_id = req.query.user_id,
//     //     auth = req.query.auth,
//     //     classroom = req.query.classroom,
//     //     signature = req.query.signature,
//     //     whiteboard_token = user_id + "_" + auth + "_" + classroom,
//     //     hash = crypto.createHash("sha1"),
//     //     encrpted = null;
//     next();
// }

// function getUserCount(query) {
//     var result;

//     if (classrooms[query.classroom] === undefined) {
//         // return "room does not exist";
//         result = "0";
//     } else {
//         result =  String(classrooms[query.classroom].length);
//     }

//     return result;
// }

// function msgBroadcast(query) {
//     var result;

//     if (classrooms[query.classroom] === undefined) {
//         result = "room does not exist";
//     } else {
//         socketRoutines.broadcastToClassroom("-1", query.classroom, "msgBroadcast", query.msg);
//         result = "200";
//     }

//     return result;
// }

// function register(query) {
//     var user_id = query.user_id,
//         user_name = query.user_name,
//         user_avatar = query.user_avatar,
//         classroom = query.classroom,
//         user = null;

//     // find the user
//     user = users.find(function(el) {
//         return el.user_id === user_id;
//     });

//     // Create or move this user
//     if (!user) {
//         // console.log("create this user");
//         users.push({
//             user_id: user_id,
//             user_name: user_name,
//             user_avatar: user_avatar,
//             classroom: classroom
//         });
//     } else {
//         // console.log("move this user")
//         user.classroom = classroom;
//     }

//     // Create this classroom if not being created yet
//     if (classrooms[classroom] === undefined) {
//         classrooms[classroom] = [];
//         classrooms[classroom].strokes = [];
//         classrooms[classroom].chat = [];
//     }
// }

// function usersInClassroom(query) {
//     var list = [parseInt(query.user_id, 10)],
//         result;

//     if (classrooms[query.classroom] === undefined) {
//         result = "[]";
//     } else {
//         classrooms[query.classroom].each(function(skt) {
//             if (!list.any(parseInt(skt.user_id, 10))) {
//                 list.push(skt.user_id);
//             }
//         });

//         result = "[";
//         list.each(function(l, index) {
//             if (index === 0) {
//                 result = result + l;
//             } else {
//                 result = result + "," + l;
//             }
//         });
//         result = result + "]";
//     }

//     return result;
// }

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});