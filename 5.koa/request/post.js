const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser());

app.use(async (ctx) => {
	if (ctx.url === '/' && ctx.method === "GET") {
		let html = `
			<h1>request</h1>
			<form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
		`
		ctx.body = html;
	} else if( ctx.url === '/'&&ctx.method === 'POST' ) {
		// let postData = await parsePostData(ctx);
		let postData = ctx.request.body;
		ctx.body = postData;
	} else {
		// 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
	}
})


// 解析上下文中node原生请求的post参数
// function parsePostData(ctx) {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			let postData = '';
// 			ctx.req.addListener('data', (data) => {
// 				postData += data;
// 			})

// 			ctx.req.addListener('end', () => {
// 				console.log(postData);
// 				let parseData = parseQueryStr(postData);
// 				resolve(parseData);
// 			})
// 		}catch(err) {
// 			reject(err);
// 		}
// 	})
// }

// 将POST请求的参数字符串解析为JSON
// function parseQueryStr(queryStr) {
// 	let queryData = {};
// 	let queryStrList = queryStr.split('&');
// 	console.log(queryStrList);

// 	queryStrList.forEach((item) => {
// 	  let itemList = item.split('=')
//     queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
// 	})

// 	return queryData;
// }

app.listen(7070, () => {
  console.log('[demo] request post is starting at port 7070')
})



















