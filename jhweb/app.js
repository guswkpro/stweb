var express = require('express');
var mysql = require('mysql');
var app = express();

var conn = mysql.createConnection({

	hostname: "13.124.196.226::3516",
	user: "root",
	password: "1234",
	database: "",
	charset: "utf8"
})
var server = app.listen(3516, function(){
	console.log("Express server has started on port 3516")
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/',function(req, res){
	res.render('user/login.html');

);
app.get('/signup', function(req, res){
	res.render('user/signup.html');
});

 
