var dao = require('../../dao/index.js');
var async = require('async')

exports.login = function(id, pw, callback){
        async.waterfull([(nextCallback){
            dao.login(id, pw, nextCallback);    //dao.login
        }    
    ], function(error, result){
        if(error){
            console.log(error);
            callback("0");
        } else if(result.length ==0 ){
            callback("2");
        }else {
            callback("1");
        }
    });

    