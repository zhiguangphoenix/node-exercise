var http = require('http');
const moment = require('moment');

var server = http.createServer(function (req, res) {

	console.log(req instanceof http.IncomingMessage);
	console.log(res instanceof http.IncomingMessage);
	var thistime = moment().valueOf();
	res.end(thistime.toString());
})

server.listen(3000);