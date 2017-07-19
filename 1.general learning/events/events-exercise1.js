const EventEmitter = require('events');
const util = require('util');

class MyStream extends EventEmitter {
	write(data) {
		this.emit('data', data);
	}
}

const stream = new MyStream();

stream.on('data', (data) => {
	console.log('Receive: ' + data);
})
stream.write('ES 6')

