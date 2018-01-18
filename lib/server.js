/*!
  Basic HTTP web server.

  Nick Freear, 18-January-2018.

  http://taylor.fausak.me/2013/02/17/testing-a-node-js-http-server-with-mocha/
*/

var http = require('http');

this.server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!\n');
});

exports.listen = function () {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function (callback) {
  this.server.close(callback);
};

// End.
