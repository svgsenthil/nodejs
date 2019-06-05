var http = require('http');
var dt = require('./customDateTime')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World! Now: ' + dt.myDateTime());
  res.write(req.url);
  res.end();
}).listen(8080);