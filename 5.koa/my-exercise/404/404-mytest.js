const Koa = require('koa');

const app = module.exports = new Koa();

app.use(function pageNotFound(ctx) {
	
	ctx.status = 404;

	console.log(ctx.accepts('json', 'html'));

	switch(ctx.accepts('json', 'html')) {
		case 'html':
			ctx.type = 'html';
			ctx.body = '<p>PAGE NOT FOUND</p>';
			break;
		case 'json':
			ctx.type = 'json';
			ctx.body = {
				message: 'PAGE NOT FOUND'
			};
			break;
		default:
			ctx.type = 'text';
			ctx.body = 'PAGE NOT FOUND';
	}
});

if(!module.parent)
	app.listen(3000);