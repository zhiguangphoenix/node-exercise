var http = require('http');
const moment = require('moment');

var server = http.createServer(function (req, res) {

	var thistime = moment().valueOf();
	res.end(thistime.toString());
})

server.listen(3000);