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
		res.json({
			"RESULT" : result
		});
	});
});

app.post('/signcheck', function(req,res){
        var uid = req.body.id;
        var upw = req.body.pw;
        var unickname = req.body.name;
        var uemail = req.body.email;

        var connection = client.query('INSERT into users_table ( user_id, user_pw, user_mail, user_nickname) values(?,?,?,?)', [uid, upw, uemail, unickname], function(err, rows){

        console.log(rows);

        if(err){
                console.error('err', err);
                throw err;
 }
                console.log(connection);
        });

        res.redirect('/');

});
