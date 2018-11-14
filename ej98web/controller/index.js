var dao = require('../dao/index.js');
var async = require('async');



exports.login = function(uid,upw, callback) {
 
	async.waterfall([
		function(nextCallback){
			dao.login(uid,upw,nextCallback);
		}
	], function(error, result){
		if(error){
			console.log(error);
			callback("0");
		}
		else if(result.length == 0) {
			callback("2");
		}
		else{
			callback("1");
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

