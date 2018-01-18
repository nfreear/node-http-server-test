/*!
  Mocha tests.

  Nick Freear, 18-January-2018.

  http://taylor.fausak.me/2013/02/17/testing-a-node-js-http-server-with-mocha/
*/

var server = require('../lib/server');

var assert = require('assert'),
    http = require('http');

describe('server', function () {

  // Boilerplate.
  before(function () {
    server.listen(8000);
  });

  after(function () {
    server.close();
  });

  // Tests.
  describe('/', function () {
    it('should return 200', function (done) {
      http.get('http://localhost:8000', function (res) {
        assert.equal(200, res.statusCode);
        done();
      });
    });

    it('should say "Hello, world!"', function (done) {
      http.get('http://localhost:8000', function (res) {
        var data = '';

        res.on('data', function (chunk) {
          data += chunk;
        });

        res.on('end', function () {
          assert.equal('Hello, world!\n', data);
          done();
        });
      });
    });
  });

});
