var express = require('express');
var http = require('http');
var controller = require('./controller/logincontroller');
var app = express();
var dao = require('./dao/index')
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});
var bodyParser = require('body-parser'); 
//bodyparser(-->post request를 처리)을 사용하기 위해서
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res){
    res.render('./LoginForm.html');
});

app.get('/main',function(req,res){
    res.render('./main.html');
})

app.get('/getUserInfo', (req, res) => {
    dao.getuser((err, rows)=> {
        res.send(rows);
    });
});


app.post('/LoginForm',function(req, res){
	
    var req_mem_id = req.body.id;
    var req_mem_pw = req.body.password;
    
    controller.login(req_mem_id,req_mem_pw,function(result){
        res.redirect('/main');
        
    });
});

app.get('/JoinForm',function(req,res){
    res.render('./JoinForm.html');
});



app.post('/JoinForm',function(req, res){
    var req_id = req.body.id;
    var req_pw= req.body.password;
    var req_nick = req.body.nickname;
    var req_email = req.body.email;

    controller.join(req_id,req_pw,req_nick,req_email,function(result){
        res.json({
			"RESULT" : result
		});
        //res.render('/');
        
    });
});
