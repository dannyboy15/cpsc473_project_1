var path = require("path");
var fs = require("fs");

pages = {
  "/" : "index.html",
  "/login" : "login.html",
  "/logout" : "logout.html",
  "/profile": "profile.html",
  "/signup" : "signup.html",
  "404" : "404.html",
};

var getHTMLfor = function(url) {
  console.log("looking for html for " + url);
  var isScriptUrl = url.match(/^\/scripts\/(.*)$/);
  var isStyleURL = url.match(/^\/stylesheets\/(.*)$/);
  var isImgUrl = url.match(/^\/img\/(.*)$/);

  var fileName;
  var filePath;
  var fileType;

  var data = {};

  if(isScriptUrl) {
    console.log(isScriptUrl);
    fileName = isScriptUrl[1];
    fileType = "text/javascript";
    filePath = path.resolve(__dirname, "scripts", fileName);
  } else if (isStyleURL) {
    console.log(isStyleURL);
    fileName = isStyleURL[1];
    fileType = "text/css";
    filePath = path.resolve(__dirname, "app/stylesheets", fileName);
  } else if (isImgUrl) {
    fileName = isImgUrl[1];
    fileType = "image/png";
    filePath = path.resolve(__dirname, "img", fileName);
  } else {
    fileName = pages[url];


    if(fileName) {
      console.log("found it! " + fileName);
      fileType = "text/html";
      filePath = path.resolve(__dirname, "app", fileName);
    } else {
      fileType = "text/html";
      filePath = path.resolve(__dirname, "app", pages["404"]);
    }
  }

  console.log("file path " + filePath);

  var html = getFile(filePath);
  // console.log("@Getfile html: " + html);
  data.type = fileType;
  data.html = html;
  console.log(data);
  return data;
};

var getFile = function(filePath) {
  var html;
  try {
    html = fs.readFileSync(filePath);
    // console.log("data" + html);
    return html;
  } catch (err) {
    console.log("Error reading file, sendinf 404");
    console.log(err);
    return "<h1>404 - Page Not Found (Error GF)<h1>";
  }

};

module.exports = getHTMLfor;
