var express = require('express');
var app = express();
var controller = require('./controller/logincontroller');
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});
var bodyParser = require('body-parser'); 
//bodyparser(-->post request를 처리)을 사용하기 위해서

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/views');


app.get('/', function(req, res){
    res.render('./LoginForm.html');
});

app.post('/LoginForm',function(req, res){
	
    var req_mem_id = req.body.id;
    var req_mem_pw = req.body.password;
    
    controller.login(req_mem_id,req_mem_pw,function(result){
        res.json({
            "RESULT":result
        });
    });

});

app.get('/JoinForm',function(req,res){
    res.render('./JoinForm.html');
});

app.post('/JoinForm',function(req, res){
    var req_id = req.body.id;
    var req_pw= req.body.password;
    var req_nick = req.body.nickname;
    var req_email = req.body.email1 + req.body.email2;

    controller.join(req_id,req_pw,req_nick,req_email,function(result){
        res.json({
            "RESULT":result
        });
    });
});
