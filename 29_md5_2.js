const common = require('./29_libs/common');

var str = common.md5('123456');

var str = common.md5(str + 'asfasffassfa%&%*dsadds都撒大大所多');

console.log(str);