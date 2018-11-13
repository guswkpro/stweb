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
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        var signdate=mm+'/'+dd+'/'+yyyy;
      db.query('INSERT INTO users_table(user_id,user_password,user_nickname,user_email,user_signdate) VALUES(?,?,?,?,?)',[id,pw,nick,email,signdate],function(error,result,fields){
          console.log(result);
           callback(error,result);
      });
  }

  exports.getuser = function(callback) {
      db.query('select * from users_table', callback);
  }

