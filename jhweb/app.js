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
});
app.get('/signup', function(req, res){
	res.render('user/signup.html');
});

app.post('/login',function(req, res){
	var user_id = req.body.id;
	var user_pw = req.body.password;
t
	var query = 


} 
