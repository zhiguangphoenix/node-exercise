const MyEmitter = require('events');
const myEmitter = new MyEmitter();

myEmitter.once('newListener', (event, listener) => {
	if(event === 'event'){
		myEmitter.on('event', () => {
			console.log('B');
		});
	}
});

myEmitter.on('event', () => {
	console.log('A');
})

myEmitter.emit('event');

console.log(MyEmitter.defaultMaxListeners);

const myEE = new MyEmitter();
myEE.on('foo', () => console.log('111'));
myEE.on('foo', () => console.log('222'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');