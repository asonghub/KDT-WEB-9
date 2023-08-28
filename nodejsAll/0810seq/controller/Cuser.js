const { render } = require('ejs');
// const userInfo = require('../model/Muser');
const models = require('../models');
// const { User } = require('../models')
const { Op } = require('sequelize');

const express = require('express');
const session = require('express-session');
const app = express()

app.use(session({
    secret: 'blah blah',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 1000,
    }
}));


//회원가입화면 
exports.signUp = (req, res)=>{
    // userInfo.getInfo((rows)=>{
        res.render('signup');
    // })  
};
//로그인 화면
exports.signIn = (req, res)=>{
    console.log(req.session)
    let sess = req.session;
    if(sess.isLogined){
        // res.send(sess)
        models.User.findOne({
            where: { userid : sess.userid, pw: sess.pw }
        }).then( (data)=>{
            // console.log('login data', data )
            // console.log('sess',sess)
            res.render('profile', {data, sess} );
        }
        )
        
    }else{
        res.render('signin');
    }
}

exports.logOut = (req, res)=>{
    console.log(req.session)
    let sess = req.session;
    if(sess.isLogined){
        req.session.destroy((err)=>{
            // console.log('sess',sess)
           if(err) {console.log(err)}
           else{
               res.clearCookie('connect.sid');
               req.redirect('/user/signin')
           }
        })
    }
}


//회원가입하기 
exports.registerUser = (req,res)=>{
    console.log('등록정보',req.body);
    // userInfo.registerUser(req.body,()=>{
    //     res.send({result:true}) //이거 왜하지
    // })
    models.User.create({
        name: req.body.name,
        userid: req.body.userid,
        pw: req.body.pw
    }).then( result =>{
        res.send({result:true})
    });
}



//로그인하기 
exports.confirmUser = (req, res)=>{
    console.log('로그인시도');
    // userInfo.confirmUser(req.body,(result)=>{
    //     console.log(req.body)
    //     console.log('result',result[0])
    //     if(result.length === 0 ){
    //         res.send({result: false})
    //     }else if(req.body.pw !== result[0].pw){
    //         res.send({result: false})
    //     }else{
    //         res.send({result: true})
    //     }
        
    // })
    const {userid, pw} = req.body; //키와 밸류가 같으면 생략가능 
    //where자리에 , where: {userid, pw}라고만 쓸수 있음
    models.User.findOne({
        where: { userid, pw }
    }).then((data) =>{
        
        req.session.isLogined = true;
        req.session.userid = userid;
        req.session.pw = pw;
        // console.log(req.session)
        res.send({result: true, data})
    })
}

//프로필
// exports.profile =(req, res) =>{
//     res.render('profile')
// }
exports.postProfile = (req, res)=>{
    
    // userInfo.getUserInfo(req.body,(result)=>{
    //     console.log('result',result);
    //     res.render('profile', {data: result[0]})
    // })

   const { userid } = req.body;
    models.User.findOne({
        where: { userid }
    }).then( data =>{
        console.log(data)
        res.render('profile', {data} )
    })   
}

//프로필 수정
exports.editProfile = (req, res)=>{
    // userInfo.patchUser(req.body, () =>{
    //     console.log('수정완료')
    //     res.send({result:true});
    // })
    const { userid, pw, name, id} =req.body;
    models.User.update(
        { userid, pw, name },
    { where: {id}}
    ).then((result)=>{
        console.log('update',result);
        res.send({result: true})
    });
};

//탈퇴
exports.deleteUser = (req, res)=>{
    // userInfo.deleteUser(req.body, ()=>{
    //     res.send({result:true});
    // })
    const { id } = req.body
    models.User.destroy({ where: {id} }).then( result =>{
        res.send({result:true});
    })
}

exports.findall = (req, res) => {
    User.findAll({
        // attriutes 원하는 칼럼 조회
        attributes: ['name', 'pw'], // name이랑 pw만 가져오기
        // Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.ne(같지않은)
        // Op.or(또는), Op.in(배열 요소중 하나), Op.notIn(배열 오소와 모두 다름)
        // where: {
        //     id: {
        //         [Op.gte]: 2
        //     }
        // },
        order: [['id','DESC']],
        limit: 1,
        offset: 1,
    }).then((result) => {
        console.log('findall', result);
        res.send({ result});
    })
}