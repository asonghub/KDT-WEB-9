const model = require('../model/Model');
const express = require('express')

/////////////////////////////////////
//GET
const main = (req, res) => {
    //세션 있으면 프로필 보여주기
    const user = req.session.user;
    console.log(user)
    if(user === undefined){
       res.render('index', {result: false});
    }else{
        model.db_profile(user, (result)=>{
            const { id, name, userid } = result[0];
            res.render('index',{result: true, id, name, userid})
        })
    }
};

//회원가입
const signup = (req, res)=>{
    res.render('signup');
}
//로그인
const signin = (req,res)=>{
    res.render('signin')
}
//로그아웃
const logout = (req, res) =>{
    const user = req.session.user;
    if(user == undefined ){
        res.send(`<script>alert('잘못된 접근입니다'); document.location.href='/';</script>`);
    }else{
        req.session.destroy(()=>{
            res.clearCookie('asong-session')
            res.redirect('/')
        })
    }
}

//회원정보 조회
const profile = (req, res)=>{
    console.log(req.params) //profile/1 하면 {id:1}이라고 나옴
    console.log(req.query)
    //profile/11?abc=123&name=asong 하면
    //{ id: '11' } { abc: '123', name: 'asong' }
    model.db_profile(req.params.id, (result)=>{
        res.render('profile', {data : result[0]})
    })
}

const buy = ()=>{}


///////////////////////////////////////
//POST
//회원가입
const post_signup = (req,res)=>{
    model.db_signup(req.body, ()=>{
        res.json({result: true})
    })
}

//로그인
const post_signin = (req,res)=>{
    model.db_signin(req.body, (result)=>{
        if(result.length > 0){
            req.session.user = result[0].id;
            res.redirect('/');
        }else{
            res.send(`<script> alert('로그인 실패'); document.location.href='/';</script>`)
        }
    })
}

///////////////////////////
//PATCH
const edit = (req,res)=>{
    model.db_edit(req.body, (result)=>{
        console.log('수정완', result)
        res.json({result})
    })

}

const edit_profile = ()=>{}


//회원정보수정 기능
//회원정보조회 => GET
//회원정보수정 => PATCH


module.exports = {
    main,
    signup,
    signin,
    post_signup,
    post_signin,
    logout,
    edit,
    profile,
    edit_profile,
    buy
}