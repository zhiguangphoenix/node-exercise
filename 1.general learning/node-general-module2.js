function Hello(){
    var name;

    this.setName = function(thename){
        name = thename;
    };

    this.sayHello = function(){
        console.log("Hello " + name);
    }
}

// exports.Hello = Hello;
module.exports = Hello;