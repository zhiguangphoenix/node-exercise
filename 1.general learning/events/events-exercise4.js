const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', function (a, b) {
	console.log(a, b, this);
})

myEmitter.emit('event', 'a', 'b');

myEmitter.on('eventEs6', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('eventEs6', 'a', 'b');