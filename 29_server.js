const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');
const expressRoute = require('express-route');

const multerObj = multer({dest:'./29_static/upload'});

var server = express();
server.listen(8080);

//1.获取请求数据
//get自带
server.use(bodyParser.urlencoded());
server.use(multerObj.any());

//2.cookie、session
server.use(cookieParser());

(function(){
  var keys = [];
  for(var i=0;i<10000;i++){
    keys[i] = 'a_' + Math.random();
  }
  server.use(cookieSession({
    name:'sess_id',
    keys:keys,
    maxAge:20*60*1000   //20min
  }));
})();

//3.模板
server.engine('html',consolidate.ejs);
server.set('views','./29_template');
server.set('view engine','html')

//4.route
server.use('/',require('./29_route/web')());
server.use('/admin/',require('./29_route/admin')());


//5.default:static
server.use(static('./29_static/'));