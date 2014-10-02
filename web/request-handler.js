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
    } else if (req.url === '/www.google.com') {
      //use fs readfile, check list of urls
      fs.readFile('archives/sites.txt', 'utf8',
        function(err, data) {
          if (err) {
            return ("Error: file could not be found.")
          } else {
            //if url include google
            var re = new RegExp(req.url.slice(1));
            if (data.toString().match(re) !== null) {
              res.writeHead(200, httpHelpers.headers);
              res.end(data);
            }
          }
        })
    } else {
        res.writeHead(404, httpHelpers.headers);
        res.end();
    }
  } else if (req.method === "POST") {
    var url = "";
    req.on('data', function(chunk){
      url += chunk.slice(4);
    });

    //write the url to the sites.txt
    fs.appendFile('test/testdata/sites.txt', url + '\n',
      function(err, data) {
        if(err) {
          return "URL was not appended."
        } else {
          //return a header of 302, res.end()
          res.writeHead(302, httpHelpers.headers);
          res.end();
        }
      })
  }
};

  // res.end(archive.paths.list);
