const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

//cookie  读取cookie
server.use(cookieParser('sdsadsadfad'));

server.use('/aaa/a.html',function(req,res){
  req.secret = 'sdsadsadfad';
  res.cookie('user','Judy',{signed:true})
  console.log('签名cookie',req.signedCookies);
  console.log('无签名cookie',req.cookies);
  //删除cookie
  res.clearCookie('user');
  console.log('无签名cookie',req.cookies);
  res.send('ok');
});

server.listen(8080);