var path = require("path");
var fs = require("fs");

pages = {
  "/" : "index.html",
  "/login" : "login.html",
  "/logout" : "logout.html",
  "/profile": "profile.html",
  "/signup" : "signup.html",
  "404" : "404.html"
};

var getHTMLfor = function(url) {
  console.log("looking for html for " + url);
  var fileName = pages[url];
  var filePath;

  if(fileName) {
    console.log("found it! " + fileName);
    filePath = path.resolve(__dirname, "app", fileName);
  } else {
    filePath = path.resolve(__dirname, "app", pages["404"]);
  }
  console.log("file path " + filePath);

  var html = getFile(filePath);
  console.log("@Getfile html: " + html);
  return html;
};

var getFile = function(filePath) {
  var html;
  try {
    html = fs.readFileSync(filePath);
    console.log("data" + html);
    return html;
  } catch (err) {
    console.log("Error reading file, sendinf 404");
    console.log(err);
    return "<h1>404 - Page Not Found (Error GF)<h1>";
  }

};

module.exports = getHTMLfor;
