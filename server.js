var http = require("http");

function start () {
	// body... 

	function onRequest (req, res) {
		console.log('Req received.');
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write("Hello world!");
		res.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log('Server has started.');	

}
exports.start = start;
