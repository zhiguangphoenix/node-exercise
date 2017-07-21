var fs = require('fs');
var rs = fs.createReadStream('test.md', {fd: 3});
var data = '';

rs.on('data', function (trunk) {
	data += trunk;
})

rs.on('end', function () {
	console.log(data);
})

console.log("事件循环和请求对象".length);
console.log(new Buffer("事件循环和请求对象").length);