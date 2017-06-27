const Koa = require('koa');
const auth = require('koa-basic-auth');

const app = module.exports = new Koa();

// custom 401 handling

app.use(async function(ctx, next) {
	try {
		await next();
	} catch(err) {
		console.log(err);
		console.log(err.status);
		if(err.status === 401) {
			console.log("fuck");
			ctx.status = 401;
			ctx.set('WWW-Authenticate', 'Basic');
			ctx.body = 'cant haz that';
		} else {
			throw err;
		}
	}
})

// require auth

app.use(auth({ name: 'tj',pass: 'tobi' }));

// secret response

app.use(async function(ctx) {
	ctx.body = 'secret';
})

if (!module.parent) app.listen(3001);