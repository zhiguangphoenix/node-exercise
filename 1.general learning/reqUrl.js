const http = require("http");

var server = http.createServer(function (req, res) {
	res.end(req.url);
});

server.listen(8080);