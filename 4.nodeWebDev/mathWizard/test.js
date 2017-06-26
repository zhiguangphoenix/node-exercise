var http = require('http');
var url  = require('url');

http.createServer(function (req, res) {

	// url.parse(req.url, true);
	console.log(url.parse(req.url, true));

	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end("fuck");
}).listen(8080);