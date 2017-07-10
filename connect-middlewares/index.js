var connect = require('connect');
var http = require('http');
var app = connect();



app.use(function (req, res, next) {
	if(req.url === '/'){
		res.end('Hello from Connect!\n');
	}
	next();
})

app.use('/aa/bb/cc', function(req, res, next) {
	res.end('aabbcc');
})

app.listen(3000);