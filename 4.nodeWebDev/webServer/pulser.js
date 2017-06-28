var events = require('events');
var util = require('util');

function Pulser() {
	events.EventEmitter.call(this);
}

util.inherits(Pulser, events.EventEmitter);

Pulser.prototype.start = function () {
	var self = this;
	setInterval(function () {
		util.log('>>>> Pulser');
		self.emit('pulse');
		util.log('<<<< Pulser');
	}, 1000);
}

var pulser = new Pulser();
pulser.on('pulse', function() {
	util.log('pulse received');
})

pulser.start();