const jade=require('jade');
const fs=require('fs');

var str=jade.renderFile('./views/13_jade_main.jade',{pretty:true});

fs.writeFile('./build/13_jade_main.html',str,function(err){
  if(err)
    console.log('失败')
  else
    console.log('成功')
})