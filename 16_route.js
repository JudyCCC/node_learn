const express = require('express');

var server = express();

//目录1：/user/
var routeUser = express.Router();

server.use('/user',routeUser)

routeUser.get('/1.html',function(req,res){    //http://xxx.com/user/1.html
  res.send('user1');
});
routeUser.get('/2.html',function(req,res){    //http://xxx.com/user/2.html
  res.send('user2');
});

//目录2：/article/
var artivleRouter = express.Router();
server.use('/article',artivleRouter);

artivleRouter.get('/10001.html',function(req,res){  //http://xxx.com/article
  res.send('10001');
})

server.listen(8080);
