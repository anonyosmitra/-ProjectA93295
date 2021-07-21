var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express');

var port = 5015;

var options = {
    key: fs.readFileSync('keys/privkey.pem'),
    cert: fs.readFileSync('keys/fullchain.pem'),
};

var app = express();

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

app.get('/', function (req, res) {
    res.sendFile('home.html');
});