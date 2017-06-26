/**
 * 解析访问请求
 * 返回页面中的公共部分，例如导航和页面框架
 */

var url = require('url');
var re = /{title}/g;

exports.loadParams = function (req, res, next) {
	req.requrl = url.parse(req.url, true);

	req.a = (req.requrl.query.a && !isNaN(req.requrl.query.a))?new Number(req.requrl.query.a):NaN;
	req.b = (req.requrl.query.b && !isNaN(req.requrl.query.b))?new Number(req.requrl.query.b):NaN;
	if(next)
		next();
}

exports.navbar = function () {
	return ["<div class='navbar'>",
			"<p><a href='/'>主页</a></p>",
			"<p><a href='/mult'>乘法</a></p>",
			"<p><a href='/square'>平方</a></p>",
			"<p><a href='/factorial'>阶乘</a></p>",
			"<p><a href='/fibonacci'>斐波那契数</a></p>",
			"</div>"].join('\n');
}

exports.page = function (title, navbar, content) {
	return ["<html><head><meta charset='utf-8'><title>{title}</title></head>",
			"<body><h1>{title}</h1>",
			"<table><tr>",
			"<td>{navbar}</td><td>{content}</td>",
			"</tr></table></body></html>"].join('\n').replace(re, title).replace("{navbar}", navbar, "g").replace("{content}", content, "g");
}