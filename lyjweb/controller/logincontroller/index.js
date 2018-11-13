var dao =require('../../dao/index.js');
var async = require('async');


//로그인 위한 객체 생성..?
exports.login = function(id,pw,callback){
    //비동기함수를 순차적으로 실행하지만 각 작업의 결과를 다음 작업으로 넘길때
    async.waterfall([
        function(nextcallback){
            dao.login(id,pw,nextcallback);
        }
    ], function(err,result){
        if(err){
            console.log(error);
            callback("0");
        }
        else if(result.length==0){
            callback("2");
        }else{
            callback("1");
        }
    });
    //dao로 로그인 값 확인..?
}

exports.join = function(id,pw,nick,email,callback){
    async.waterfall([
        function(nextcallback){
            dao.join(id,pw,nick,email,nextcallback);
        }
    ],function(err,result){
        if(err){
            console.log(error);
            callback("0");
        }else{
            callback("1");
        }
    });
}

exports.getUserProfile = function(req,res){
    var req_mem_id = req.param('id');

    dao.getUserProfile(req_mem_id,function(result){
        var count =0;
        var list=[];

        async.whilst(function(){
            return count<result.length;
        }, function(callback){
            list.push(result[cout]);
            count++;
            callback();
        },function(err){
            console.log(err);
        });
        res.json({
            memlist :list
        });
    });
};

