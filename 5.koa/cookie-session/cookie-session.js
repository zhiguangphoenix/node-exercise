const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
	if (ctx.url === '/index') {
		ctx.cookies.set(
				'cid',
				'hello world',
				{
					domain: 'localhost',
					path: '/index',
					maxAge: 2*60*1000,
					httpOnly: false,
					overwrite: false
				}
			)
		ctx.body = 'cookie is ok';
	} else {
		ctx.body = 'hello world';
	}
})

app.listen(7070, () => {
	console.log("koa service is listening at 7070 ...");
});
