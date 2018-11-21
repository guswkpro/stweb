var dao = require('../dao/index.js');
var async = require('async');



exports.login = function(req, res) {
 
	var uid = req.body.id;
	var upw = req.body.pw;

	async.waterfall([
		function(nextCallback){
			dao.login(uid,upw,nextCallback);
		}
	], function(error, result){
		if(error){
			console.log(error);
			nextcallback("0");
		}
		else if(result.length == 0) {
			nextcallback("2");
		}
		else{
			nextcallback("1");
		}
	});

};

exports.signup = function(req, res){
	var uid = req.body.id;
	var upw = req.body.pw;
	var uemail = req.body.email;
	var unickname = req.body.nickname;

	    async.waterfall([
                function(nextCallback){
                        dao.signup(uid,upw,uemail, unickname, nextCallback);
                }
        ], function(error){
                if(error){
                        console.log(error);
                      //  nextcallback("0");
                }
                else{
                      nextcallback("1");
		      redirect('/');
                }
        });
};


exports.getUserProfile = function(req, res) {
	var uid = req.param('id');
	
	dao.getUserProfile(uid, function(result){
		var count = 0;
		var list = [];
		
	
	res.json({
	
	   memlist : list
	});

      });
};

