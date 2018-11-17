var express = require('express');
var http = require('http');
var logincontroller = require('./controller/logincontroller');
var app = express();
var bodyParser = require('body-parser');
//var session = require(express-session) // 세션
//npm install express-session --save


var server = app.listen(3000, function(){
	console.log("Express server has started on port 3000")
})

app.use(bodyParser.urlencoded({extended: false}));

app.set('views', __dirname + '/views');
app.set('view engin', 'ejs');
app.engin('html', require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('login.html');
})

app.get('/login', function(req, res){
	res.render('login.html')
})

app.post('/login', function(req, res){
	var req_mem_id = req.body.id;
	var req_mem_pw = req.body.pw;

	controller.logincontroller(req_mem_id, req_mem_pw, function(result){
		res.json({
			"RESULT" : result
		});
	});
});


