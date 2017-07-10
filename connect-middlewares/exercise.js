function merge(a, b) {
	if(a && b) {
		for (var key in b) {
			a[key] = b[key];
		}
	}
	return a;
}

var aa = {
	name: 'aa',
	age: 33
};
var bb = {
	size: 'A+'
}

merge(aa, bb);

console.log(aa);


const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();
// myEmitter.on('events', (a, b)=>{
// 	setImmediate(()=>{
// 		console.log('this happens asynchronously');
// 	})
// 	console.log('a= ' + a + ',' + 'b= ' + b);
// })
// myEmitter.emit('events', 'one', 'two');


// let m = 0;
// myEmitter.once('event', ()=>{
// 	console.log(++m);
// })
// myEmitter.emit('event');
// myEmitter.emit('event');

// myEmitter.on('error', (err)=>{
// 	console.error('whoops! there was an error');
// })
// myEmitter.emit('error', new Error('oops'));

myEmitter.once('newListener', (event, listener)=>{
	console.log(1);
	if(event === 'event') {
		console.log(2);
		myEmitter.on('event', ()=>{
			console.log(3);
			console.log('B');
		})
	}
})
myEmitter.on('event', ()=>{
	console.log(4);
	console.log('A');
})

myEmitter.emit('event');
myEmitter.on('removeListener', ()=>{
	console.log('removeListener');
})
myEmitter.on('fuck', function () {
	
});
myEmitter.removeListener('fuck', function () {
	
})

function fuck() {
	console.log('fuck');
}
fuck.route = [];
fuck.name = [];
console.log(fuck);
















