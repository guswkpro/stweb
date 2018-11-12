var dao = require('../../dao/index.js');
var async = require('async');

exports.login = function(id, pw, callback) {
	async.waterfall([
		function(nextCallback){
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
/*	dao.login(id, pw, function(error, result) {
		console.log(result.user_idx);
		if(result.user_idx != null){
			callback("1");
		} else {
			callback("0");
		}
	});
*/
};

exports.getUserProfile = function(req, res) {
	var req_mem_id = req.param('id');
	
	dao.getUserProfile(req_mem_id, function(result) {
		var count = 0;
		var list = [];
		
		async.whilst(function() {
			return count < result.length;
		}, function(callback) {
			list.push(result[count]);
			count++;
			callback();
		}, function(err) {
			console.log(err);
		});
		
		res.json({
			memlist : list
		});
	});
};
