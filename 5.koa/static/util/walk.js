// 遍历目录内容
const fs = require('fs')
const mimes = require('./mimes')

/**
* 遍历读取目录内容（子目录，文件名）
* @param  {string} reqPath 请求资源的绝对路径
* @return {array} 目录内容列表
*/
function walk(reqPath) {
	let files = fs.readdirSync(reqPath);

	let dirList = [], fileList = [];
	for(let i = 0;i < files.length; i++) {
		let item = files[i];
		let itemArr = item.split("\.");
		let itemMime = ( itemArr.length > 1 ) ? itemArr[ itemArr.length - 1 ] : "undefined";

		if (typeof mimes[itemMime] === "undefined") {
			dirList.push(item);
		}else{
			fileList.push(item);
		}
	}

	let res = dirList.concat(fileList);
	return res;
}

module.exports = walk;


