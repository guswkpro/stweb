var express = require('express');
var app = express();
var server = app.listen(3516, function(){
	console.log("Express server has started on port 3516")
})
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/',function(req, res){
	res.render('user/login.html');

//	res.json({
//		"RESUTL" : "server ON"
});
app.get('/signup', function(req, res){
	res.render('user/signup.html');
});

 
