var mysql      = require('mysql');
var db = mysql.createConnection({
    host     : 'calivan.ctk1nynf5quj.us-east-2.rds.amazonaws.com',
    user     : 'calivan',
    password : 'youngjun423!',
    database : 'calivan'  //db 이름 설정
  });

  //로그인
  exports.login=function(id,pw,callback){
      db.query('SELECT * FROM users_table where user_id=? AND user_password =?',[id,pw],function(error,result,fields){
            //id와 pw를 db에서 확인
        console.log(result);
        if(result.length!=0){
            db.query('UPDATE users_table SET user_recent_date = NOW() WHERE user_id= ?',[id]);
            //최근 접속 시간 수정 코드
        }
        callback(error,result);
      });
    }
      

//아이디 중복확인
  exports.idcheck=function(id,callback){
      db.query('SELECT * FROM users_table where user_id =?',[id],callback)
  }

//회원가입
  exports.join = function(id,pw,nick,email,callback){
     
      db.query('INSERT INTO users_table(user_id,user_password,user_nickname,user_email,user_sign_date,user_recent_date,user_image_path,user_withdraw,user_withdraw_date) VALUES(?,?,?,?,NOW(),NOW(),0,0,0)',[id,pw,nick,email],function(error,result,fields){
          console.log(result);
           callback(error,result);
      });
  }

//유저 정보 확인 -> 나중에 삭제 혹은 관리자만 볼수 있게끔 수정해야함
  exports.getuser = function(callback) {
      db.query('select * from users_table', callback);
  }

