var path = require('path')
var mysql = require('mysql');

var connection mysql.createConnection({
    host : '13.58.230.106',
    port : 3006,
    user : 'calivan',
    password : 'youngjun423!',
    database : 'calivan'
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
