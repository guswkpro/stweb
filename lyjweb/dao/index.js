var mysql      = require('mysql');
var db = mysql.createConnection({
    host     : '13.58.230.106',
    user     : 'suyeon',
    password : 'suyeondb',
    database : 'sydb'
  });
    db.connect();

    module.exports = db;
exports.login = function(req, res){
    var id = req.body.l_id;
    var pw = req.body.l_pw;
    db.query(`SElECT count(*) cnt FROM user_table WHERE user_id=? and user_pw=?`, [id, pw], function(err1, rows){
        var cnt=rows[0].cnt;

        if(cnt===1){
            dq.query(`SELECT * FROM user_table WHERE user_id=?`, [id], function(err2, user){
                if(err2){
                    console.log('err');
                }
                res.render('./index',{
                     id: user.user_id,
                    name: user.user_name
                 });
            });
        }
    });
}
