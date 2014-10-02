var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers.js');
var url = require('url');
var fs = require('fs');
// require more modules/folders here!
var loadPage = ('../web/public/index.html');

exports.handleRequest = function (req, res) {
  if (req.url === "/") {
    if (req.method === "GET") {
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
    }
  }
  // res.end(archive.paths.list);
};
