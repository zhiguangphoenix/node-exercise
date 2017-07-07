const moment = require('moment');
const request = require('request');
var out = "";

function run() {
	return new Promise(function (resolve, reject) {
		request("http://127.0.0.1:3000/", function (err, res, body) {
			if(err){
				reject(err);
			}else{
				out = body;
				resolve(body);
			}
		});
	});
}
module.exports = run;