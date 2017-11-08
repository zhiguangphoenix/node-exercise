// 使用静态资源中间件
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

const staticPath = './static';

app.use(static(path.join(__dirname, staticPath)));

// app.use(async (ctx) => {
// 	ctx.body = "hello world";
// })

app.listen(7070, () => {
	console.log("koa service is listening on 7070...");
})