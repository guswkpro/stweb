var express = require('express');
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
})
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('./LoginForm.html');
});

app.get('/Join',function(req,res){
    res.render('./JoinForm.html');
})

app.post('/LoginForm',function(req, res){
	
    var req_mem_id = req.body.id;
    var req_mem_pw = req.body.password;
    
    controller.login(req_mem_id,req_mem_pw,function(result){
        res.json({
            "RESULT":result
        });
    });

});
