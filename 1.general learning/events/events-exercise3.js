const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('event1', () => {
	var date = new Date();
	while(new Date() - date < 1000){

	}	
});

myEmitter.on('event1', () => {
	console.log('2222');
})

myEmitter.emit('event1');


