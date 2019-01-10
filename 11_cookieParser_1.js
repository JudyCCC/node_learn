const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

//cookie  赋值
server.use('/aaa/a.html',function(req,res){
  res.cookie('user','blue',{path:'/aaa',maxAge:30*40*3600*1000});
  res.send('ok');
});

server.listen(8080);