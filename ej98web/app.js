var express = require('express');
var controller = require('./controller');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend:false}));
var dao = require('./dao/index.js');
var client = dao.client;

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
      console.log("Express server has started on port 3000");
});

app.get('/', function(req, res){
        res.render("./login.html");
});



app.get('/signup', function(req, res){
        res.render("./signup.html");
});

app.post('/logincheck', function(req, res){
        var uid = req.body.id;
        var upw = req.body.pw;

	controller.login(uid, upw, function(result){
		if(err){
			res.send('<script> alert("id or passwd is wrong"); history.back();</script>');
		}
		res.json({
			"RESULT" : result
		});
		res.redirect('./main.html');
	});
});

app.post('/signcheck', function(req,res){
        var uid = req.body.id;
        var upw = req.body.pw;
        var unickname = req.body.name;
        var uemail = req.body.email;

	controller.signup(uid, upw, uemail, unickname, function(result){
		res.json({
			"RESULT" : result
		});
		res.redirect('/');
	});

});
