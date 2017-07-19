const eventEmitter = require('events');

module.exports = new eventEmitter();

setTimeout(() => {
	module.exports.emit('done', 123);
}, 0);

module.exports.f = 22;
exports.f = 22;

console.log(module.exports);
console.log(exports);
