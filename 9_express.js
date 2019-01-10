const express = require('express');

var server = express();

// server.use('/a.html',function(req,res){
//   // res.write('a');    
//   res.send({a:'a',b:'b'});    //send可以传对象，write只能传字符串或buffer
//   res.end();
// });

// server.use('/b.html',function(req,res){
//   res.send('123');
//   res.end();
// });

// server.get('/',function(){
//   console.log('有get');
// })

// server.post('/',function(){
//   console.log('有post');
// })

server.use('/',function(){
  console.log('有use');
})

server.listen(8080);