var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser')

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
app.get('/login', function(req, res){
    res.render('./login.html');
});
app.get('/signup', function(req, res){
    res.render('./signup.html');
});