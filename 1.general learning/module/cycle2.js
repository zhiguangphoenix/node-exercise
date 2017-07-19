console.log('b start');
exports.done = false;
const a = require('./cycle1.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');