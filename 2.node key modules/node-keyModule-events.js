var events = require("events");

var emitter = new events.EventEmitter();

emitter.once("someEvent", function(arg1, arg2){
    console.log("listener1", arg1, arg2);
});

emitter.on("someEvent", function(arg1, arg2){
    console.log("listener2", arg1, arg2);
});

emitter.emit("someEvent", "czg ", "fuck");

emitter.removeAllListeners("someEvent");

emitter.emit("someEvent", "xxx", "fff");

console.log("----------------------------------------");

emitter.on("error", function(){
    console.log("errors!!!");
})
emitter.emit("error");