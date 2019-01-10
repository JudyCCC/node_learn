const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var server = http.createServer(function(req,res){
  //GET
  var obj = urlLib.parse(req.url,true);

  var url = obj.pathname;
  const GET = obj.query;

  //POST
  var str = '';
  req.on('data',function(data){
    str += data;
  });
  req.on('end',function(){
    const POST = querystring.parse(str);

    /**
     * url-要什么
     * GET-get数据
     * POST-post数据
     */
    
     //文件请求
     var file_name = './www' + url;
     fs.readFile(file_name,function(err,data){
       if(err){
         res.write('404');
       }else{
         res.write(data);
       }
       res.end();
     })
  })
}).listen(8080);