const connect = require('connect');
const htutil = require('./htutil');
const morgan = require('morgan');
const app = connect();
const url = require('url');
const http = require('http');

app	.use(morgan("combined"));

app.use(function (req, res, next) {
	req.parsedPath = url.parse(req.url, true).pathname;
	next();
})

app.use(function (req, res, next) {
	htutil.loadParams(req, res, next);
})

app.use('/', function (req, res, next) {
	if(req.parsedPath != '/'){
		next();
	} else {
		require('./home-node').get(req, res, next);
	}
});
app.use('/factorial', function (req, res, next) {
	if(req.parsedPath != '/factorial'){
		next();
	} else {
		require('./factorial-node').get(req, res, next);
	}
});
app.use('/fibonacci', function (req, res, next) {
	if(req.parsedPath != '/fibonacci') {
		next();
	} else {
		require('./fibo2-node').get(req, res, next);
	}
});
app.use('/mult', function (req, res, next) {
	if(req.parsedPath != '/mult') {
		next();
	} else {
		require('./mult-node').get(req, res, next);
	}
});

app.use('/square', function (req, res, next) {
	if(req.parsedPath != '/square') {
		next();
	} else {
		require('./square-node').get(req, res, next);
	}
})
app.listen(8124);





