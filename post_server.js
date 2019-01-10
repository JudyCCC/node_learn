const http = require('http');
const querystring = require('querystring');

http.createServer(function(req,res){
  //POST-req

  var str = '';   //接收数据

  //data-有一段数据到达就发生一次（很多次）
  var i=0;
  req.on('data',function(data){
    console.log(`第${i}次`);
    str+=data;
  });
  //end-数据全部到达才发生（一次）
  req.on('end',function(){
    var POST = querystring.parse(str);
    console.log(POST);
  });
}).listen(8080);