var express = require('express');
var http = require('http');
var logincontroller = require('./controller/logincontroller');
var app = express();
var bodyParser = require('body-parser');

var server = app.listen(3000, function(){
	console.log("Express server has started on port 3000")
})

app.use(bodyParser.urlencoded({extended: false}));


