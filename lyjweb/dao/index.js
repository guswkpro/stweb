var mysql      = require('mysql');
var db = mysql.createConnection({
    host     : 'calivan.ctk1nynf5quj.us-east-2.rds.amazonaws.com',
    port : 3306,
    user     : 'calivan',
    password : 'youngjun423!',
    database : 'calivan'
  });

  exports.login=function(id,pw,callback){
      db.query('SELECT * FROM users_table where user_id=? AND user_password =?',[id,pw],function(error,result,fields){
          console.log(result);
          callback(error,result);
      });
  };

  exports.join = function(id,pw,nick,email,callback){
        
      db.query('INSERT INTO users_table(user_id,user_password,user_nickname,user_email,user_signdate,user_recent_date,user_image_path,user_withdraw,user_withdraw_date) VALUES(?,?,?,?,?,?,?,?,?)',[id,pw,nick,email,now(),now(),null,0,null],function(error,result,fields){
          console.log(result);
           callback(error,result);
      });
  }

  exports.getuser = function(callback) {
      db.query('select * from users_table', callback);
  }

