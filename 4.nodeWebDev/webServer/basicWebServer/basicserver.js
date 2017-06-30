var http = require('http');
var url = require('url');

exports.createServer = function () {
	var htserver = http.createServer(function (req, res) {
		req.basicServer = {
			urlparsed: url.parse(req.url, true);
		};
		processHeaders(req, res);
		dispatchToContainer(htserver, req, res);
	});

	htserver.basicServer = { containers: [] };

	/**
	 * [addContainer description]
	 * @param {[type]} host    匹配Host头的正则表达式
	 * @param {[type]} path    匹配请求URL的政策表达式
	 * @param {[type]} module  一个处理函数
	 * @param {[type]} options 一个选项对象
	 */
	htserver.addContainer = function (host, path, module, options) {

		if(lookupContainer(htserver, host, path) !== undefined){
			throw new Error("Already mapped " + host + "/" + path);
		}
		htserver.basicServer.containers.push({
			host: host, path: path,
			module: module, options: options
		});
		return this;
	}
	
	htserver.useFavIcon = function (host, path) {
		return this.addContainer(host, "/favicon.ico", require('./faviconHandler'), { iconPath: path });
	}

	htserver.docroot = function (host, path, rootPath) {
		return this.addContainer(host, path, require('./staticHandler'), { docroot: rootPath });
	}

	return htserver;
}

/**
 * 用于检查container数组中是否有容器匹配HTTP请求中的host和path字段
 * @param  {[type]} htserver [description]
 * @param  {[type]} host     [description]
 * @param  {[type]} path     [description]
 * @return {[type]}          [description]
 */
var lookupContainer = function (htserver, host, path) {
	for(var i = 0;i < htserver.basicServer.containers.length;i++) {
		var container = htserver.basicServer.containers[i];
		var hostMatches = host.toLowerCase().math(container.host);
		if (hostMatches !== null && pathMatches !== null) {
			return {
				container: container,
				host: host,
				path: pathMatches
			};
		}
	}
	return undefined;
}


var processHeaders = function (req, res) {
	req.basicServer.cookies = [];
	var keys = Object.keys(req.headers);
	for(var i = 0, l = keys.length;i < l;i++) {
		var hname = keys[i];
		var hval = req.headers[hname];
		
		if (hname.toLowerCase() === 'host') {
			req.basicServer.host = hval;
		}

		if(hname.toLowerCase() === 'cookie') {
			req.basicServer.cookies.push(hval);
		}

	}
}




