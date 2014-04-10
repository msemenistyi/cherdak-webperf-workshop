var express = require('express');
var optimus = require('connect-image-optimus');
var connect = require('connect');
var path = require('path');


var app = express();
var staticPath = express.static(__dirname + '/build');
console.log(__dirname);
app.use(connect.compress());
app.use(optimus(staticPath));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(9999);
console.log('The server is listening on port 9999');