const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

function render(filename) {
  let fullPath = `./view/${filename}`;
  console.log(fullPath);
  return new Promise(function (resolve, reject) {
    fs.readFile(fullPath, "binary", function (err, data) {
      if (err) {
        reject(err);
      }else{
        resolve(data);
      }
    })
  })
}

async function route(url) {
  let view = "";
  switch(url) {
    case '/':
      view = "index.html";
      break;
    case '/index':
      view = "index.html";
      break;
    case "/todo":
      view = "todo.html";
      break;
    default:
      view = "404.html";
      break;
  }
  let html = await render(view);
  return html;

}


app.use(async (ctx) => {
  let url = ctx.request.url;
  ctx.body = await route(url);
})

app.listen(7070);
console.log("koa service is listening 7070 ... ");
