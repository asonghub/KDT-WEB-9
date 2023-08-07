
const userInfo = require('../model/Mprac1')

//module.exports.main인데 module 생략가능 
exports.main = (req,res)=>{ 
    res.render('prac1')
};

exports.confirm = (req,res)=>{ 
    // const id = userInfo.userInfo().id;
    // const pw = userInfo.userInfo().pw;
    const id= userInfo.userInfo.id;
    const pw= userInfo.userInfo.pw;
    console.log(id, pw);
    if(id === req.body.id&& pw===req.body.pw){
        res.send({result:true, userInfo: req.body})
    }else{
        res.send({result:false, userInfo: null})
    }

}
