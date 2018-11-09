var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')

var connection = mysql.createConnection({
	host : '18.223.175.64',
	port : 3000,
	user : 'root',
	password : 'root',
	database : 'JungeDBInstance'
});

connection.connect();

router.get('/', function(req, res){
	console.log('get join url')
	res.sendFile(path.join(__dirname, '../../view/join.html'))
})

module.exports = router;
