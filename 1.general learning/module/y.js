const x = module.require('./x');
x.on('done', function (args) {
	console.log(args);
})
console.log(x.f);

console.log(module.require);


