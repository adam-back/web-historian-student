var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers.js');
var url = require('url');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  if (req.url === "/") {
    if (req.method === "GET") {
      // res.statusCode = 200;
      res.writeHead(200, httpHelpers.headers);
      res.end('<input');

      // res.writeHead(200, {'Location': './public/loading.html'} );
      // res.end();
    };
  }
  // res.end(archive.paths.list);
};
