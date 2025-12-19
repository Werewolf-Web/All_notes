let http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
 
  res.end("server is running");
}).listen(1234);