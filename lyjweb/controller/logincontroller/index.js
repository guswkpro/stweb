var dao =require('../../dao/index.js');
var async = require('async');


//로그인 dao로 값 전송..?
exports.login = function(id,pw,callback){
    //비동기함수를 순차적으로 실행하지만 각 작업의 결과를 다음 작업으로 넘길때
    async.waterfall([
        function(nextcallback){
            dao.login(id,pw,nextcallback);
        }
    ], function(error,result){
        if(error){
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

//회원가입 dao로 값 전송
exports.join = function(id,pw,nick,email,callback){
    async.waterfall([
        function(nextcallback){
            dao.join(id,pw,nick,email,nextcallback);
        }
    ],function(error,result){
        if(error){
            console.log(error);
            callback("0");
            //가입실패
        }else{
            callback("1");
            //가입성공
        }
        
    });
}

//유저정보확인 --> 분석 필요...어떤 방식인지 
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
        },function(error){
            console.log(error);
        });
        res.json({
            memlist :list
        });
    });
};


//아이디 중복 체크
exports.idcheck= function(id,callback){
    dao.idcheck(id,callback);
};