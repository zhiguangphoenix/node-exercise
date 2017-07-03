var http = require("http");
var url = require("url");

exports.createServer = function () {
	var htserver = http.createServer(function (req, res) {
		req.basicServer = {
			urlparsed: url.parse(req.url, true);
		};
		processHeaders(req, res);
		dispatchToContainer(htserver, req, res);
	});
	htserver.basicServer = {
		containers: []
	}
	
	htserver.addContainer = function (host, path, module, options) {
		if(lookupContainer(htserver, host, path) !== undefined) {
			throw new Error("Already mapped " + host + "/path");
		}
		htserver.basicServer.containers.push({
			host: host,
			path: path,
			module: module,
			options: options
		});
		return this;
	}

	htserver.useFavIcon = function (host, path) {
		return this.addContainer(host, "/favicon.ico", require("./faviconHandler"), {iconPath: path});
	}

	htserver.docroot = function(host, path, rootPath) {
		return this.addContainer(host, path, require("./staticHandler"), { docroot: rootPath });
	}

	return htserver;
}

/**
 * [ lookupContainer 检查container数组中是否有容器匹配HTTP请求中的host和path请求 ]
 * @param  {[type]} htserver [description]
 * @param  {[type]} host     [description]
 * @param  {[type]} path     [description]
 * @return {[type]}          [description]
 */
var lookupContainer = function (htserver, host, path) {
	for(var i = 0;i < htserver.basicServer.containers.length;i++) {
		var container = htserver.basicServer.containers[i];
		var hostMatches = host.toLowerCase().math(container.host);
		var pathMatches = path.match(container.path);
		if(hostMatches !== null && pathMatches !== null) {
			return {
				container: container,
				host: hostMatches,
				path: pathMatches
			};
		}
	}
	return undefined;
}

/**
 * [processHeaders 搜索req.headers数组以查找cookies和Host头部]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
var processHeaders = function (req, res) {
	req.basicServer.cookies = [];
	var keys = Object.keys(req.headers);
	for( var i = 0, l = keys.length;i < 1;i++) {
		var hname = keys[i];
		var hval = req.headers[hname];
		if(hname.toLowerCase() === "host") {
			req.basicServer.host = hval;
		}
		if(hname.toLowerCase() === "cookies") {
			req.basicServer.cookies.push(hval);
		}
	}
}

var dispatchToContainer = function (htserver, req, res) {
	var container = lookupContainer(htserver, req.basicServer.host, req.basicServer.urlparsed.pathname);

	if (container !== undefined) {
		req.basicServer.hostMatches = container.host;
		req.basicServer.pathMatches = container.path;
		req.basicServer.container = container.container;
		container.container.module.handle(req, res);
	} else {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.end("no handler found for" + req.host + "/" + req.urlparsed.path);
	}
}







