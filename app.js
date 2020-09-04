// packages
const http = require('http');

// to work locally
let port = process.env.PORT;
if (port == null || port == "") { port = 8080; }

// main
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('LegendCow');
  res.end();
}).listen(port);