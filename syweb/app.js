var http = require('http');
var url = require('url');
var qs = require('querystring');
var db = require('./dao/index');
var express = require('express');
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
})
app.get('/', function(req, res){
    res.send('./index.html');
});
app.post('/login', function(req, res){
    res.render('/');
});
app.get('/signup', function(req, res){
    var id = req.body.s_id;
    var pw = req.body.s_pw;
    var name = req.body.s_name;
    var email = req.body.s_email;
    var address = req.body.address;
    var mobile = req.body.mobile;
    var birth = s_birth;

});
var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if (pathname === '/') { 
        if (queryData.id === undefined) {
           index.loin(request, respone);
          } else {
            index.main(request, response);
          }
        }
        else if(pathname === '/login'){
            index.
        }