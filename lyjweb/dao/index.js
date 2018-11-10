var mysql = require('mysql');
var client mysql.createConnection({
    host : 'calivan.ctk1nynf5quj.us-east-2.rds.amazonaws.com',
    port : 3006,
    user : 'calivan',
    password : 'youngjun423!',
    database : 'calivan'
});

export.login = function(id,pw,callback){
    client.query('SELECT * FROM calivan.users_table where user_id=? AND user_password=?',[id,pw],function(error,result,fields){
        console.log(result);
        callback(error,result);
    });
};