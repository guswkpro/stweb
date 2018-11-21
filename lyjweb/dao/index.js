var mysql      = require('mysql');
var db = mysql.createConnection({
    host     : 'calivan.ctk1nynf5quj.us-east-2.rds.amazonaws.com',
    user     : 'calivan',
    password : 'youngjun423!',
    database : 'calivan'
  });

  exports.login=function(id,pw,callback){
      db.query('SELECT * FROM calivan.users_table where user_id=? AND user_password =?',[id,pw],function(error,result,fields){
        console.log(result);
        db.query('UPDATE calivan.users_table SET user_recent_date =NOW() WHETE user_id= ?',[id],function(error,result,fields){
            console.log(result);
            callback(error,result);
        });
        //callback(error,result);
      });
    }
      /*
      최근시간 수정
      db.query('UPDATE FROM users_table SET user_recent_date = ? WHETE user_id= ?',[recent_date,id],function(error,result,fields){
          console.log(result);
          callback(error,result);
      });
      
  };
*/

//실험중
/*
아이디 중복확인
  exports.check=function(id,callback){
      db.query('SELECT *FROM users_table where user_id =?',[id],function(error,reuslt,fields){
            callback(error,result);
      })
  }

 */
  
  exports.join = function(id,pw,nick,email,callback){
     // var data= new Date().toLocaleDateString('se').replace(/\D/g, '')
      //var sign_date=new Date().toISOString().slice(0, 10).replace('T', ' ');
      db.query('INSERT INTO calivan.users_table(user_id,user_password,user_nickname,user_email,user_sign_date,user_recent_date,user_image_path,user_withdraw,user_withdraw_date) VALUES(?,?,?,?,NOW(),NOW(),0,0,0)',[id,pw,nick,email],function(error,result,fields){
          console.log(result);
           callback(error,result);
      });
  }

  exports.getuser = function(callback) {
      db.query('select * from users_table', callback);
  }

