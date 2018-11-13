var mysql      = require('mysql');
var db = mysql.createConnection({
    host     : 'calivan.ctk1nynf5quj.us-east-2.rds.amazonaws.com',
    port : 3306,
    user     : 'calivan',
    password : 'youngjun423!',
    database : 'calivan'
  });

  exports.login=function(id,pw,callback){
      db.query('SELECT * FROM users_table where user_id=? AND user_password =?',[id,pw],function(err,result,fields){
          console.log(result);
          callback(error,result);
      });
  };

  exports.join = function(id,pw,nick,email,callback){
        //var signtime= new Date().toLocaleDateString;
      db.query('INSERT INTO users_table(user_id,user_password,user_nickname,user_email) VALUES(?,?,?,?)',[id,pw,nick,email,signdate],function(err,result,fields){
          console.log(result);
          callback(error,result);
      });
  }

  exports.getuser = (callback) => {
      db.query('select * from users_table', callback);
  }





/*
    db.connect();

    module.exports = db;
exports.login = function(req, res){
    var id = req.body.l_id;
    var pw = req.body.l_pw;
    db.query(`SElECT count(*) cnt FROM user_table WHERE user_id=? and user_pw=?`, [id, pw], function(err1, rows){
        var cnt=rows[0].cnt;

        if(cnt===1){
            dq.query(`SELECT * FROM user_table WHERE user_id=?`, [id], function(err2, user){
                if(err2){
                    console.log('err');
                }
                res.render('./index',{
                     id: user.user_id,
                    name: user.user_name
                 });
            });
        }
    });
}
*/