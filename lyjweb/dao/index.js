var mysql      = require('mysql');
var db = mysql.createConnection({
    host     : 'calivan.ctk1nynf5quj.us-east-2.rds.amazonaws.com',
    port : 3306,
    user     : 'calivan',
    password : 'youngjun423!',
    database : 'calivan'
  });

  exports.login=function(id,pw,callback){
      var recent_date =new Date().toISOString().slice(0, 19).replace('T', ' ');
      db.query('SELECT * FROM users_table where user_id=? AND user_password =?',[id,pw],function(error,result,fields){
          console.log(result);
          callback(error,result);
      });
      db.query('UPDATE FROM users_table SET user_recent_date ? WHETE user_id= ?',[recent_date,id]);
  };
  /*

  function getTimeStamp() {
    var d = new Date();
    var s =
        leadingZeros(d.getFullYear(), 4) + '-' +
        leadingZeros(d.getMonth() + 1, 2) + '-' +
        leadingZeros(d.getDate(), 2) + ' ' +

        leadingZeros(d.getHours(), 2) + ':' +
        leadingZeros(d.getMinutes(), 2) + ':' +
        leadingZeros(d.getSeconds(), 2);

    return s;
    }

    function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (i = 0; i < digits - n.length; i++)
        zero += '0';
    }
    return zero + n;
    }
    */
  exports.join = function(id,pw,nick,email,callback){
     // var data= getTimeStamp();
      var sign_data=new Date().toISOString().slice(0, 19).replace('T', ' ');
      db.query('INSERT INTO users_table(user_id,user_password,user_nickname,user_email,user_sign_date,user_recent_date,user_image_path,user_withdraw,user_withdraw_date) VALUES(?,?,?,?,?,?,?,?,?)',[id,pw,nick,email,sign_data,sign_data,null,0,null],function(error,result,fields){
          console.log(result);
           callback(error,result);
      });
  }

  exports.getuser = function(callback) {
      db.query('select * from users_table', callback);
  }

