var fs = require('fs');

fs.watch('./data.txt', (eventType, fileName) => {
	
	console.log(eventType);
})
