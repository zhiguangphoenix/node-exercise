var fs = require('fs');

fs.readFile('./data.txt', {encoding: 'utf8'}, function (err, data) {
	console.log(data);
})

fs.writeFile('./data.txt', 'appending data...', function (err) {
	if(err)
		throw err;
	console.log('appending successfully');
})