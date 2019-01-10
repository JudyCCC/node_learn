/**
 * 自己写类似bodyParser的中间件
 */
const express = require('express');

var server = express();
server.listen(8080);

/**
 * 中间件bodyParser原理，运行可能会报错
 */
server.use(function(req,res,next){
  var str = '';
  req.on('data',function(data){
    str += data;
  });
  req.on('end',function(){
    req.body = str;
    next();
  });
})

server.use('/',function(req,res){
  console.log(req.body);
})