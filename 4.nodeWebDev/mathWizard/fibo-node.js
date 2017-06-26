var htutil = require('./htutil');
var math = require('./math');

exports.get = function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end(
		htutil.page("Factorial", htutil.navbar(), [
				(!isNaN(req.a)?
					("<p class='result'>fibonacci {a} = {fibo}</p>".replace("{a}", req.a).replace("{sq}", req.b).replace("{fibo}", math.fibonacci(Math.floor(req.a)))):""),
				"<p>输入得斐波那契数</p>",
				"<form name='fibonacci' action='/fibonacci' method='get'>",
				"A: <input type='text' name='a'/>",
				"<input type='submit' vlaue='Submit'>",
				"</form>"
			].join('\n'))
		)
}
