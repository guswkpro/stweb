var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')

var connection mysql.createConnection({
    host : 'calivan.ctk1nynf5quj.us-east-2.rds.amazonaws.com',
    port : 3006,
    user : 'calivan',
    password : 'youngjun423!',
    database : 'calivan'
});


