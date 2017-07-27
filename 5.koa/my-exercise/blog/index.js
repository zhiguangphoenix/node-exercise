const render = require('./lib/render');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');

const Koa = require('koa');
const app = module.exports = new Koa();

// fake database
const posts = [];


app.use(logger());

app.use(render);


app.use(koaBody());

router.get('/', list)
	.get('/post/new', add)
	// .get('/post/:id', show)
	// .get('/post', create);

app.use(router.routes());

async function list(ctx) {
	console.log(ctx.render);
	await ctx.render('list', { posts: posts});
}

async function add(ctx) {
	await ctx.render('new');
}









if(!module.parent)
	app.listen(3000);