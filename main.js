const crypto = require('crypto'),
      fs = require("fs"),
      http = require("http");

var privateKey = fs.readFileSync('keys/privkey.pem').toString();
var certificate = fs.readFileSync('keys/fullchain.pem').toString();

var credentials = crypto.createCredentials({key: privateKey, cert: certificate});

var handler = function (req, res) {
   console.log(req)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
};

var server = http.createServer();
server.setSecure(credentials);
server.addListener("request", handler);
server.listen(5015)