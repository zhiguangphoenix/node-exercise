var koa = require('koa');
var app = new koa();

var port = process.argv[2];

app.use(function* (next) {
      // skip the rest of the code if the route does not match
      if (this.path == '/') {
      	this.body = 'hello koa';
      }else if (this.path == '/404') {
      	this.body = 'page not found';
      }else if (this.path == '/500') {
      	this.body = 'internal server error'
      }
})

app.listen(port);