// var Hello = require("./node-general-module2").Hello;
var Hello = require("./node-general-module2");

hello = new Hello();
hello.setName("abc");
hello.sayHello();
console.log(global.console);