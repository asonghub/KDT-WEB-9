const db = require('../models');
const { User } = require('../models');
// const User = db.UserModel;

require('dotenv').config();

exports.index = (req, res) => {
    res.render('index');
};

exports.get_join = (req, res) => {
    res.render('join');
}

exports.join = async (req, res) =>{
    try{
        const {name, userid, pw}  = req.body;
        const hashPw = createHash(pw);
        const result = await User.create({
            userid, 
            name, 
            pw: hashPw
        })
        res.send( result )
    }catch(error){
        console.log(error)
    }
}  

exports.get_login = (req, res)=>{
    res.render('login')
}
exports.login = async(req,res)=>{
    const { userid , pw } = req.body;
    const result = await User.findOne({
        where: {userid},
    })
    if(!result){
        //window.alert('사용자가 존재하지 않습니다') >서버에서 못씀
        res.json({result:false, message:'사용자가 존재하지 않습니다.'})
    }
    const compare = compareHash(pw, result.pw)
    console.log(compare)
    if(compare){
        res.json({result: true});
    }else{
        res.json({result:false, message: '비밀번호가 일치하지 않습니다.'})
    }
}

exports.profile = (req, res)=>{
    res.render('profile');
}


//암호화
const bcrypt = require('bcrypt');
const salt = Number(process.env.SALT);

function createHash(pw) {
    return bcrypt.hashSync(pw, salt)
}

function compareHash(pw, dbPw){
    return bcrypt.compareSync(pw, dbPw)
}