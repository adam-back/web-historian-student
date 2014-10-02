var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var sites = require('../sites/sites.txt'); //fix
var httpHelpers = require('./http-helpers.js');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

//go through sites.txt
exports.readListOfUrls = function(target){
  fs.readFile(__dirname + '../archives/sites/sites.txt', 'utf8',
    function(err, data) {
      if(err) {
        return;
      } else {
        var data = data.toString();
        exports.isUrlInList(data, target);
      }
    });
};

//is it in sites.txt
exports.isUrlInList = function(data, target) {
  var regEx = '/' + target + '/';
  if(data.match(regEx) === null) {
    return false;
  } else {
    return true;
  }
};

//add url to sites.txt
exports.addUrlToList = function(){
};

//is it already a document
exports.isURLArchived = function(){
};

//download document file
exports.downloadUrls = function(){
};
