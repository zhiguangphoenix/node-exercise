const Koa = require("koa");
const fs = require("fs");
const app = new Koa();
const Router = require("koa-router");

let home = new Router();

home.get('/', async (ctx) => {
	let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
});

let page = new Router();
page.get('/404', async (ctx) => {
	ctx.body = "404 page";
}).get("/helloworld", async (ctx) => {
	ctx.body = "helloworld page";
})

// 装载所有路由
let router = new Router();
router.use('/', home.routes());
router.use('/page', page.routes());

app.use(router.routes()).use(router.allowedMethods())

app.listen(7070, () => {
  console.log('[demo] route-use-middleware is starting at port 7070')
})











