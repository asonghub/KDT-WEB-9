const {User} = require('../models');
const crypto = require('crypto');
require('dotenv').config();

exports.index = (req, res) => {
    res.render('index');
};

exports.signUp = (req, res) =>{
    res.render('signUp');
}

exports.signIn = (req, res) =>{
    res.render('singIn');
}

exports.registerUser = async (req,res)=>{
    console.log('등록정보',req.body);

    const salt = crypto.randomBytes(16).toString('base64');
    const result = await User.create({
        name: req.body.name,
        userid: req.body.userid,
        pw: creatPW(req.body.pw, salt),
        salt: salt
    })
    
    if( result) {
        res.send({result:true})
    }
}

exports.verifyUser = async (req, res) =>{
    await User.findOne({
        where: { userid: req.body }
    }).then( result =>{
        res.send({result:true})
    })
}



//암호화
const creatPW = (password, salt) =>{
    console.log(password)
    return crypto.pbkdf2Sync( password, salt, Number(process.env.ITERATIONS), Number(process.env.KEYLENG), process.env.HASH).toString('base64')
}

const verifyPassword = (password, salt, dbPassword) =>{
    const compare = crypto.pbkdf2Sync( password, salt, Number(process.env.ITERATIONS), Number(process.env.KEYLENG), process.env.HASH).toString('base64')
    if( compare === dbPassword) {
        return true;
    }else {
        return false;
    }
}