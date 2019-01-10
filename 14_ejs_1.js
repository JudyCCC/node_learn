const ejs=require('ejs');

ejs.renderFile('./views/14_ejs_1.ejs',{
  json:{arr:[
    {user:'Judy',pass:'123456'},
    {user:'zhangsan',pass:'654321'}
  ]},
  type:'admin'
},function(err,data){
  console.log(data);
})