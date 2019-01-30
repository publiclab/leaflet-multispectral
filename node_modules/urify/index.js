var mime = require('mime');
var fs = require('fs');

module.exports = function urifyNode (file) {
  var type = mime.lookup(file);
  var data = fs.readFileSync(file, 'base64');
  return 'data:' + type + ';base64,' + data;
};
