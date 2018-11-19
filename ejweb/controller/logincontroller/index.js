var dao = require('../../dao/index.js');
var async = require('async')

exports.login = function(id, pw, callback){
	async.waterfall([ function(nextCallback) {
			dao.login(id, pw, nextCallback);
		}
    ], function(error, result){

		}
	});

