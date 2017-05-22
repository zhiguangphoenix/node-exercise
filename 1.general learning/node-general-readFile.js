var fs = require("fs");

/**
 *      async =====> end fileContent
 * 
 */
// fs.readFile("file.txt", "utf-8", function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
// console.log("end");


/**
 *      sync =====> fileContent end
 * 
 */

var fs = require("fs");
var data = fs.readFileSync("file.txt", "utf-8");

console.log(data);
console.log("end");
