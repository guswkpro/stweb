var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')

var connection mysql.createConnection({
    host : '13.58.230.106',
    port : 3006,
    user : 'calivan',
    password : 'youngjun423!',
    database : 'calivan'
});

connection.connect();

router.get('/', function(req, res){
	console.log('get join url')
	res.sendFile(path.join(__dirname, '../../view/join.html'))
})

module.exports = router;
