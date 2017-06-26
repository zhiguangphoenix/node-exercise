var htutil = require('./htutil');
exports.get = function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end(
		htutil.page("Square", htutil.navbar(), [
				(!isNaN(req.a)?
					("<p class='result'>{a} squared = {sq}</p>".replace("{a}", req.a).replace("{sq}", req.a*req.a)):""),
				"<p>输入数字做平方</p>",
				"<form name='square' action='/square' method='get'>",
				"A: <input type='text' name='a'/>",
				"<input type='submit' vlaue='Submit'>",
				"</form>"
			].join('\n'))
		)
}
