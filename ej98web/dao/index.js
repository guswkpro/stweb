var mysql = require("mysql");

var client = mysql.createConnection({ 
  	hostname:"sej.ccztcwsmamd9.ap-northeast-2.rds.amazonaws.com",  
	port: 3306,
  	user : "sej", 
  	password:"1522653as", 
  	database:"mydb" 
  }); 

exports.login = function(uid, upw, callback){ 
  	client.query('SELECT * FROM mydb.users_table where user_id = ? AND user_pw = ?', [uid, upw], function(error, result, fields){ 
  		console.log(result); 
  		callback(error, result); 
  	}); 
  }; 




