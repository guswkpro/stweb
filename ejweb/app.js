var express = require('express');
var http = require('http');
var controller = require('./controller/logincontroller');
var app = express();
var server = app.listen(3000, function(){
	console.log("Express server has started on port 3000")
})
