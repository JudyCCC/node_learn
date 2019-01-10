const ejs = require('ejs');
ejs.renderFile('./views/12_ejs_1.ejs',{name:'Judy'},function(err,data){
  if(err)
    console.log('编译失败');
  else
    console.log(data);  
});