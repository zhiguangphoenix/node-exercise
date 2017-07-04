var port = 4080;
var server = require("./basicserver").createServer();

server.useFavIcon("localhost", "./docroot/favicon.jpeg");
server.docroot("localhost", "/", "./docroot");

require("../httpsniffer").sniffOn(server);
server.listen(port);