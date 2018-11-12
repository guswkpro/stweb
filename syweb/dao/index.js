var mysql      = require('mysql');
var db = mysql.createConnection({
    host     : 'sydb.cwp32sw5gaxo.ap-northeast-2.rds.amazonaws.com',
    user     : 'suyeon',
    password : 'suyeondb',
    database : 'sydb'
  });
    db.connect();

exports.login = function(l_id, l_pw, callback){

    db.query(`SELECT count(*) cnt FROM user_table WHERE user_id=? and user_pw=?`, [l_id, l_pw], function(err1, rows){
        if(err1){
            console.log('err');
        }
        var cnt=rows[0].cnt;
        console.log(cnt);
        if(cnt===1){
            dq.query(`SELECT * FROM user_table WHERE user_id=?`, [id], function(err2, user){
                if(err2){
                    console.log('err');
                }
                console.log(user);
                callback(error, user);
            });
        }
        else{
            callback(error, '0');
        }
    });
}
