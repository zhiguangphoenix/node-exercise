console.log('a start');
exports.done = false;
const b = require('./cycle2.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');


