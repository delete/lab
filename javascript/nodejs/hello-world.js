var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World');
	res.end();
}).listen(3000, function () {
	console.log('Servidor rodando em localhost:3000')
});
