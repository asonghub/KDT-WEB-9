const express = require('express');
const app = express()
const session = require('express-session');
const PORT =8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.use( session({
    secret: 'secretKey', //세션에서 젤 중요
    resave: false,
    saveUninitialized: true,
    name: 'asong-sesion',
    cookie: { //쿠키옵션 다 쓸수있음
        maxAge: 60*1000,
        httpOnly: true,
    },

}))

const userInfo = { id: 'kdt9', pw: '1234'};

app.get('/', (req,res)=>{
    //로그인 페이지에 왔을때 세션이 있는지 없는지 확인
    const user = req.session.user;
    console.log(user);
    if( user === undefined){
        res.render('index', { isLogin: false});
    }else{
        res.render('index',{ isLogin: true, user}) // user: user 일때는 생략가능
    }
});
app.get('/login',(req,res)=>{
    res.render('login')
});

app.post('/login',(req,res)=>{
    //로그인이 되는경우
    if( req.body.id == userInfo.id && req.body.pw == userInfo.pw){
        req.session.user =req.body.id //로그인 되면 세션을 만들어줌 
        res.redirect('/');
    }else{
        res.send(`<script> alert('로그인실패'); document.location.href = '/'; </script>`)
    }
})

app.get('/logout',(req,res)=>{
    const user = req.session.user;
    //로그아웃페이지로 바로 유알엘 치고 들어가면 안되니까 
    if(user === undefined){
        res.send(`<script>alert('잘못된 접근입니다'); document.location.href='/';</script>`)
    }else{
        req.session.destroy(()=>{ //세션은 다 삭제됨. 하나씩 삭제할 일이 없음.
            res.clearCookie('asong-session')
            res.redirect('/')
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})

//local storage는 브라우저를 꺼도 유지됨
//session sotrage는 로컬 스토리지랑 비슷한데 브라우저 끄면 없어짐. 