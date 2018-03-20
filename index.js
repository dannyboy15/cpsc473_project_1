var http = require("http");
var fs = require("fs");
var getHTMLfor = require("./gethtmlfile.js");
// var extract = require("./extract");
// var mime = require("mime");

var handleError = function(err, res) {
  res.writeHead(404);
  res.end();
};

var server = http.createServer(function(req, res) {
  console.log("Responding to a request.");
  var data = getHTMLfor(req.url);
  // console.log("html " + html);
  res.setHeader("Content-Type", data.type);
  res.end(data.html);
});
server.listen(3000);
