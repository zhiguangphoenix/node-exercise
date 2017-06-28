const connect = require('connect');
const htutil = require('./htutil');
const morgan = require('morgan');
const app = connect();
const url = require('url');
const connectRouter = require('connect-route');
const favicon = require('serve-favicon');
const path = require('path');
const serveStatic = require('serve-static')


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(favicon(path.join(__dirname, 'public', 'logo.jpeg')));

app.use(serveStatic(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
	htutil.loadParams(req, res);
	next();
	})
	.use(connectRouter(function (router) {
		router.get('/', require('./home-node').get);
		router.get('/factorial', require('./factorial-node').get);
		router.get('/fibonacci', require('./fibo2-node').get);
		router.get('/mult', require('./mult-node').get);
		router.get('/square', require('./square-node').get);
	}))


// app.use(function (req, res, next) {
// 	req.parsedPath = url.parse(req.url, true).pathname;
// 	next();
// })

// app.use('/', function (req, res, next) {
// 	if(req.parsedPath != '/'){
// 		next();
// 	} else {
// 		require('./home-node').get(req, res, next);
// 	}
// });
// app.use('/factorial', function (req, res, next) {
// 	if(req.parsedPath != '/factorial'){
// 		next();
// 	} else {
// 		require('./factorial-node').get(req, res, next);
// 	}
// });
// app.use('/fibonacci', function (req, res, next) {
// 	if(req.parsedPath != '/fibonacci') {
// 		next();
// 	} else {
// 		require('./fibo2-node').get(req, res, next);
// 	}
// });
// app.use('/mult', function (req, res, next) {
// 	if(req.parsedPath != '/mult') {
// 		next();
// 	} else {
// 		require('./mult-node').get(req, res, next);
// 	}
// });

// app.use('/square', function (req, res, next) {
// 	if(req.parsedPath != '/square') {
// 		next();
// 	} else {
// 		require('./square-node').get(req, res, next);
// 	}
// })
app.listen(8124);





