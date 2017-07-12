var connect = require('connect');
var http = require('http');
var app = connect();



// app.use(function (req, res, next) {

// 	res.end('Hello from Connect!\n');
// 	next();
// })

app.use('/aa', function (req, res, next) {
	res.end('/aa');
	next();
})

app.use('/aa/bb', function(req, res, next) {
	res.end('aabbcc');
})


app.listen(3000);
