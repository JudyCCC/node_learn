const path = require('path');

var str = 'c:\\wamp\\www\\a.html';

var obj = path.parse(str);

console.log(obj);

// { root: 'c:\\',          
//   dir: 'c:\\wamp\\www',  文件路径
//   base: 'a.html',        文件名部分
//   ext: '.html',          扩展名部分
//   name: 'a' }