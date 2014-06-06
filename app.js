var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var room = [];

room.strokes = [];

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  // 設定socket初始狀態
  socket.user_id = room.length;
  room.push(socket);
  console.log('User ' + socket.user_id + ' is connected.');

  socket.on('pushStrokes', function (data) {
    socket.broadcast.emit('broadcastStrokes',{
      new_strokes: data,
      id: this.user_id
    });        
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});