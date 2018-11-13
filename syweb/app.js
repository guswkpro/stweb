var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var logincontroller = require('./controller/logincontroller/index');
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('./login.html');
});
app.post('/login', function(req, res){
    var l_id=req.body.id;
    var l_pw=req.body.pw;
    logincontroller.login(l_id, l_pw, function(err, user){
        if(err){
            console.error('err');
        }
       res.render('./index.js', {
           id:user.user_id,
           name:user.user_name
       });
    });
});

app.get('/signup', function(req, res){
    res.render('./signup.html');
});