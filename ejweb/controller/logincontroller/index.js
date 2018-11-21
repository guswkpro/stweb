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


/*exports.login = function(id, pw, callback){
	async.waterfall([ function(nextCallback) {
			dao.login(id, pw, nextCallback);
		}
    ], function(error, result){
        if(id == req.mem.id && pw == req.mem.pw){   //아이디와 패스워드가 같으면
            req.session.displayName = user.displayName;
            res.redirect('/'); // /페이지로 이동
        }
        else{ //둘중 하나가 틀리면
            res.send('사용자 정보가 일치하지 않습니다. <a href="/login">login</a>')
        } // 나중에 팝업창으로 일치하지 않습니다라고 하고싶다..?
            //이코드는 당연히 안먹힐것같다ㅠㅠ

	});
*/
