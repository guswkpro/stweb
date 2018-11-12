var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
      console.log("Express server has started on port 3000")
})

app.get('/', function(req, res){
	res.render("./login.html");
});

app.get('/signup', function(req, res){
	res.render("/Sign.html");
});

app.post('/logincheck', function(req, res){
	var uid = req.body.id;
	var upw = req.body.pw;

	var connection = client.query('SELECT count(*) cnt from USER where user_id=? and user_pw=?', [uid, upw], function(err, rows){
	if(err){
		console.error('err', err);
	}
	var cnt = rows[0].cnt;
	
	if(cnt ==1){
	req.session.sessionId = uid,
	
	res.redirect('/login');
	}
	else{
	   res.json({result:'fail'});
	   res.send('<script> alert("id or passwd is wrong"); history.back();</script>');
	}	
	});
});

