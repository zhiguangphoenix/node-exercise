const MyEmitter = require('events');
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.on('event', () => {
	console.log('happens');
})
myEmitter.emit('event', 'a', 'b');