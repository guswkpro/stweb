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

