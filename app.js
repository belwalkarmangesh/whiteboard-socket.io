var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('pushStroke', function (data) {   
    socket.broadcast.emit('broadcastStroke',data);        
  });
});

http.listen(3000, function(){
  console.log('listening on port 3000');
});