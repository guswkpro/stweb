var express = require('express');
var app = express();
var server = app.listen(3516, function(){
	console.log("Express server has started on port 3516")
})
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/',function(req, res){
	res.render('user/LoginForm.html');
});
app.get('/JoinForm', function(req, res){
	res.render('user/JoinForm.html');
});

app.post('/LoginForm',function(req, res){
	var body = req.body;
    var id = body.id;
    var password = body.password;
    var nickname = body.nickname;
    var email = body.email;
    
    var query =connection.query('insert into user(id,password,nickname,email) values("'+id+'","'+password+'","'+nickname'","'+email+'")',function(err,rows)
    {if (err) { throw err;}
        console.log("Data inserted");
    }
    )
})

module.exports=router;
