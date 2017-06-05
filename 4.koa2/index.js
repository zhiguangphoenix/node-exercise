import 'babel-polyfill';
import Koa from 'koa';

var app = new Koa();

app.use(async (ctx, next) => {
  
  console.log("A1");

  await next();

  console.log("A2");
});

app.use(async (ctx, next) => {
  
  console.log("B1");

  await next();

  console.log("B2");
});

app.use(async (ctx) => {
  
  ctx.response.body = "Last";
  console.log(ctx.path);
  console.log(ctx.method);

});

app.listen(3000);