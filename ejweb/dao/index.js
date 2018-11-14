var path = require('path')
var mysql = require('mysql');

var connection = mysql.createConnection({
						host: 'jungedbinstance.colngshlieoc.us-east-2.rds.amazonaws.com',
						port: 3306,
                        user: 'root',
                        password: '0000',
                        database: 'JungeDBInstance'
                        });


exports.login = function(id, pw, callback){
	connection.query('SELECT * FROM JungeDBInstance.Users_Table where user_id = ? AND user_pw = ?', [id, pw],function(error, result, fields){
		console.log(result);
		callback(error, result);
	});

};

//exports.join = function('INSERT INTO JungeDBInstacne.Users_Table(user_id, user_pw, user_mail, user_nickname, user_tel)