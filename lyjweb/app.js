var express = require('express');
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
})
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res){
    res.render("./LoginForm.html");
});
