// packages
const http = require('http');
const cool = require('cool-ascii-faces');

// to work locally
let port = process.env.PORT;
if (port == null || port == "") { port = 8080; }

// main
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<body>');
  res.write(`<h1>${cool()}</h1>`);
  res.write('</body>');
  res.write('</html>');
  res.end();
}).listen(port);