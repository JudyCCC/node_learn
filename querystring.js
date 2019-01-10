const querystring = require('querystring');

var json = querystring.parse('user=blue&pass=123456&page=18');

console.log(json);