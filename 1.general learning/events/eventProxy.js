var EventProxy = require('eventproxy');

var proxy = EventProxy.create('a', 'b', 'c', function (aa, bb, cc) {
	console.log(`${aa} and ${bb} and ${cc}`);
})

proxy.emit('a', '111');
proxy.emit('b', '222');
proxy.emit('c', '333');
