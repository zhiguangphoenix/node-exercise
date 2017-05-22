var EventEmitter = require("events");

var event = new EventEmitter();

event.on("some_event", function(){  // 注册事件
    console.log("some_event occured.");
})

setTimeout(function(){
    event.emit("some_event");       // 触发事件
}, 1000);