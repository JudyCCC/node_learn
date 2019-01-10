const jade = require('jade');
const fs=require('fs');
//pretty-》模板格式化，调试时加，发布时不加
var str = jade.renderFile('./views/12_jade_1.jade',{pretty:true});
console.log(str);
fs.writeFile('./build/12_jade_1.html',str,function(err){
  if(err)
    console.log('写入失败');
  else
    console.log('写入成功');
});