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
  console.log('User ' + socket.user_id + ' is connected.');
  room.push(socket);

  socket.on('pushStroke', function (data) {
    room.strokes = room.strokes.concat(data);    
    socket.broadcast.emit('broadcastStroke',data);        
  });
});

http.listen(3000, function(){
  console.log('listening on port 3000');
});