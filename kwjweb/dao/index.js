var mysql = require('mysql')

 // DATABASE SETTING (Google Cloud SQL)
 var connection = mysql.createConnection({
     host     : 'stweb.ccmxaq6oosug.ap-northeast-2.rds.amazonaws.com',
     port     : 3306,
     user     : 'stweb',
     password : 'stwebstweb',
     database : 'ridingEveryone'
 });

exports.login = function(user, callback){
	client.query('SELECT * FROM ridingEveryone.users_table

 connection.connect();



 router.get('/', function(req,res){
     console.log('get join url')
     res.sendFile(path.join(__dirname, '../view/join.html'))
 })


 module.exports = router;
