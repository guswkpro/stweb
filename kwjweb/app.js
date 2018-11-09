var express = require('express');
var path = require("path");

var routes = require("./controller");

var app = express();

var server = app.listen(3000, function(){
	console.log("Express server has started on port 3000")
})
app.set("views",path.join(__dirname,"views"));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
	res.render('main.html');
});

app.get('/login', function(req, res) {
	res.render('login.html');
});


app.get('/join', function(req, res) {
	res.render('join.html');
});

module.exports = app;
