var dao = require('../../dao/index.js');
var async = require('async')

exports.login = function(id, pw, callback){
	async.waterfall([ function(nextCallback) {
			dao.login(id, pw, nextCallback);
		}
    ], function(error, result){
		if(error){
			consloe.log(error);
			callback("0");
		} else if(result.length == 0) {
			callback("2");
		} else {
			callback("1");
		}
	});

//exports.join = function(id, pw, mail, nickname, tel){}; //회원가입
//1. 회원가입시 정보를 사용자에게서 받는다.
//2. 만약 정보기입이 잘못되었다면? 에러를 낸다. -> 다시 회원가입기입 해야한다.
//3. 사용자에게서 받은 정보를 저장한다.

