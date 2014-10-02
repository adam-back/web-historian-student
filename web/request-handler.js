var path = require('path');
var archive = require('../helpers/archive-helpers.js');
var httpHelpers = require('./http-helpers.js');
var url = require('url');
var fs = require('fs');
// require more modules/folders here!
var loadPage = ('../web/public/index.html');

exports.handleRequest = function (req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      fs.readFile(__dirname + '/public/index.html', 'utf8',
        function(err, data) {
          if(err) {
            res.writeHead(500, httpHelpers.headers);
            res.end("Error");
          } else {
            res.writeHead(200, httpHelpers.headers);
            res.end(data);
          }
        });
    } else if (archive.readListOfUrls(req.url, res)) {
      archive.readListOfUrls(req.url, res);
    } else {
      res.writeHead(404, httpHelpers.headers);
      res.end("Error: 404 Not Found.");
    }
  }
  else if (req.method === "POST") {
    res.on('data', function(){
      console.log("req.url", req)
    })
    archive.readListOfUrls(req.url, res)
  }
  // res.end(archive.paths.list);
};
