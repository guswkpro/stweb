var path = require('path')
var mysql = require('mysql');

var connection = mysql.createConnection({
						host: '18.223.175.64',
						port: 3306,
                        user: 'root',
                        password: '0000',
                        database: 'JungeDBInstance'
                        });

connection.connect();

connection.query('select * from Users_Table', function(err, rows, fields) {
	connection.end();
	if(!err){
		console.log('The solution is: ', rows);

	}else{
		console.log('query error:' + err);
	}
});

connection.end()
