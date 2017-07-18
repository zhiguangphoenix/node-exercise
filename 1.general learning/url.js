var http = require('http');
var url = require('url');

var parsedUrl = url.parse('http://www.baidu.com:9000/qqq/www/eee?a=2&&b=2');
console.log(parsedUrl);

console.log(module.paths);