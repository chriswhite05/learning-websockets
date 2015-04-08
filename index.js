var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
      res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('sphere y', function(yPos){
    console.log('yPos: ' + yPos);
    io.emit('sphere y', yPos);
  });

  socket.on('sphere x', function(xPos){
    console.log('xPos: ' + xPos);
    io.emit('sphere x', xPos);
  });

  
});




http.listen(3000, function(){
  console.log('listening on *:3000');
});