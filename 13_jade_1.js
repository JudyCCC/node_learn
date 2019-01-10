const jade=require('jade');
console.log(jade.renderFile('./views/13_jade_1.jade',{
  pretty:true,
  name:'Judy',
  a:12,
  b:5,
  json:{width:'200px',height:'200px'},
  arr:['aaa','active'],
  loop:['aaa','bbb','ccc'],
  content:'<h2>你好啊</h2><p>aasddsd</p>'
}));