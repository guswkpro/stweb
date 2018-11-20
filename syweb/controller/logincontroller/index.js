var dao = require('../../dao/index')

exports.login = function(l_id, l_pw, callback){
    if(l_id === '' || l_pw === ''){
        res.send('<script type="text/javascript">alert("check the blank"); history.go(-1);</script>');
    }
    dao.login(l_id, l_pw, function(err, result){
        if(err){
            console.log('err');
        }
        callback(err, result);
    });
}