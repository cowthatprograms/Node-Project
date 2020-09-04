const http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('LegendCow');
  res.end();
}).listen(process.env.PORT);