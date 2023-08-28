const express = require('express');
const app = express()
const jwt =require('jsonwebtoken')
const PORT =8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const secret = 'secretKey'
const userInfo = { id: 'kdt9', pw: '1234', name: '마아송'};

app.get('/', (req,res)=>{
    res.render('index')
    
});

// app.post('/',(req,res)=>{
//     //로그인 페이지에 왔을때 토큰이 있는지 없는지 확인  
//     console.log(req.headers.authorization)
//     const auth = req.headers.authorization
//     const token = auth.split(' ')
//     if(token[0] ==='Bearer'){
//         jwt.verify(token[1], secret, (err, decoded )=>{
//             if(err){
//                 return res.status(403).send({message:'검증실패'});//인증오류 
//             }
//             console.log(decoded)//?
//             res.render('index', {userid : decoded});
//         });
//     }else{
//         res.send({message: '잘못된 인증방식입니다'})
//     }
// })
app.get('/login',(req,res)=>{
    if( req.headers.authorization){
        const token = req.headers.authorization.split('')
        try{
            const result = jwt.verify(token[1], secret)
            if( result.id === userInfo.id){
                res.json({result: true, id: userInfo.name });
            }
        }catch(error){
            console.log(error);
            res.json({ result: false, message: '인증된 회원이 아닙니다'})
        }
    }else{
        res.render('login')
    }
});

app.post('/login',(req,res)=>{
    try{
        const{ id, pw } = req.body;
        const{ id: uId, pw: uPw} = userInfo;
        if( id === uId && pw === uPw){
            const token = jwt.sign( {id}, secret );
            res.json({ result: true,token }) //send랑 json이랑 같은데, json은 json값만 보낼수 있음
        }else{
            res.json({ result: false, message: '로그인 정보가 올바르지 않습니다.'})
        }

    } catch(error){
        console.log(error)
    }
    })
    //로그인이 되는경우
    // console.log(req.body)
    // if( req.body.id == userInfo.id && req.body.pw == userInfo.pw){
    //     const id = req.body.id
    //     //토큰생성
    //     const token = jwt.sign(id, secret)
    //     res.send(token);
    // }else{
    //     res.send(`<script> alert('로그인실패'); document.location.href = '/'; </script>`)
    // }
// })

// app.get('/logout',(req,res)=>{
//     const user = req.session.user;
//     //로그아웃페이지로 바로 유알엘 치고 들어가면 안되니까 
//     if(user === undefined){
//         res.send(`<script>alert('잘못된 접근입니다'); document.location.href='/';</script>`)
//     }else{
//         req.session.destroy(()=>{ //세션은 다 삭제됨. 하나씩 삭제할 일이 없음.
//             res.clearCookie('asong-session')
//             res.redirect('/')
//         })
//     }
// })

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})

//local storage는 브라우저를 꺼도 유지됨
//session sotrage는 로컬 스토리지랑 비슷한데 브라우저 끄면 없어짐. 