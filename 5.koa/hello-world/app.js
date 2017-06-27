const Koa = require('koa');
const app = new Koa();

app.use(async function (ctx) {
	ctx.body = 'Hello World';
})

if(!module.parent)
	app.listen(3003);