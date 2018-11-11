var express = require('express');
var http = require('http');
var controller = require('./controller/logincontroller');
var app = express();
var server = app.listen(3000, function(){
	console.log("Express server has started on port 3000")
});
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/app.js',function(req,res){
    res.sned('hello world');
});
app.get('/LoginForm', function(req, res){
	res.render('LoginForm.html');
});
app.get('/userprogile',function(res,req){
    res.render('user.html')
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


app.get('/JoinForm', function(req, res){
	res.render('JoinForm.html');
});




