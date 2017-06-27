var htutil = require('./htutil');
exports.get = function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	var result = req.a*req.b;
	res.end(
		htutil.page("Multiplication", htutil.navbar(), [
				(!isNaN(req.a) && !isNaN(req.b)?
					("<p class='result'>{a}*{b}={result}</p>".replace("{a}", req.a).replace("{b}", req.b).replace("{result}", req.a*req.b))
					:""),
				"<p>输入两个数字做乘法</p>",
				"<form name='mult' action='/mult' method='get'>",
				"A: <input type='text' name='a'/><br/>",
				"B: <input type='text' name='b'/>",
				"<input type='submit' vlaue='Submit'>",
				"</form>"
			].join('\n'))
		);
}
