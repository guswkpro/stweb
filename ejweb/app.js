var express = require('express');
var app = module.exports = express();
//var http = require('http');
var logincontroller = require('./controller/logincontroller');
var bodyParser = require('body-parser'); //POST 방식 전송을 위해서 필요
var session = require(express-session); // express의 미들웨어 사용
var MysqlStore = require('session-mysql-store')(session);
//npm install express-mysql-session --save //Mysql을 Express의 Session store로 사용



var server = app.listen(3000, function(){
	console.log("Express server has started on port 3000")
})

app.use(bodyParser.urlencoded({extended: false}));//미들웨어 등록부분
app.use(bodyParser.json());


app.set('views', __dirname + '/views');
app.set('view engin', 'ejs');
app.engin('html', require('ejs').renderFile);

app.use(session({
	secret: '%$#secret%#$',	//쿠키를 임의로 변조하는것을 방지, 세션을 암호화
	resave : false, //세션을 언제나 저장할지(변경하지않아도)정하는 값, false로 하는것을 권장
	saveUninitialized: true, //세션이 저장되기 전에 uninitialized상태로 미리 만들어서 저장
	store: new MysqlStore({
				host: 'jungedbinstance.colngshlieoc.us-east-2.rds.amazonaws.com',
				port: 3306,
                user: 'root',
                password: '0000',
                database: 'JungeDBInstance'
	})


}))
//resave 세션아이디를 접속할때마다 발급하지 않는다.

app.get('/', function(req, res){
	if(req.session.displayName){ //값이 있으면 로그인 되어있는 상태
		res.rend('logout.html');
	}
	else{//값이 없으면 로그인 실패 또는 아직 로그인을 안한 상태
		res.redirect('/login');
	}
})

app.get('/login', function(req, res){
	res.render('login.html')
})

app.post('/loginprocess', function(req, res){
	var req_mem_id = req.body.id; //post방식으로 보낸 값을 가져옴
	var req_mem_pw = req.body.pw;

	controller.login(req_mem_id, req_mem_pw, function(result){
		res.json({
			"RESULT" : result
		});
	});
});


