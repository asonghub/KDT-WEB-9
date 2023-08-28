const { render } = require('ejs');
const userInfo = require('../model/Muser');

//회원가입화면 
exports.signUp = (req, res)=>{
    // userInfo.getInfo((rows)=>{
        res.render('signup');
    // })
    
};

exports.registerUser = (req,res)=>{
    console.log('등록정보',req.body);
    userInfo.registerUser(req.body,()=>{
        res.send({result:true}) //이거 왜하지
    })
}

//로그인 화면
exports.signIn = (req, res)=>{
    res.render('signin');
}

exports.confirmUser = (req, res)=>{
    console.log('로그인시도');
    userInfo.confirmUser(req.body,(result)=>{
        console.log(req.body)
        console.log('result',result[0])
        if(result.length === 0 ){
            res.send({result: false})
        }else if(req.body.pw !== result[0].pw){
            res.send({result: false})
        }else{
            res.send({result: true})
        }
        
    })
}

//프로필
// exports.profile =(req, res) =>{
//     res.render('profile')
// }
exports.postProfile = (req, res)=>{
    
    userInfo.getUserInfo(req.body,(result)=>{
        console.log('result',result);
        res.render('profile', {data: result[0]})
    })
    
}

//프로필 수정
exports.editProfile = (req, res)=>{
    userInfo.patchUser(req.body, () =>{
        console.log('수정완료')
        res.send({result:true});
    })
}

//탈퇴
exports.deleteUser = (req, res)=>{
    userInfo.deleteUser(req.body, ()=>{
        res.send({result:true});
    })
}

//로그아웃
exports.logout = (req, res) =>{
    userInfo.getUserInfo(req.body, (result)=>{
        console.log('result')
        res.render('logout',{data: result[0]})
    })
}