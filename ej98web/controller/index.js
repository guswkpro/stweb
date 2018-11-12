var mysql = require("mysql");

var conneection = mydb.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : 'root',
	database : 'mydb',
});

connection.connect();

connection.query('select name from user where id="' + id + '"',function(err,rows){
	if(err) throw err;

	if(rows[0]){
		responseData.result = "ok";
		responseData.id = rows[0].id;
	}
	else{
		responseData.result = "none";
		responseData.id = "";
	}
	res.json(responseData);
})


