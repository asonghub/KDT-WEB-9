const express = require('express');
const app = express()
const PORT =8080;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const session = require('express-session');

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.get('/',(req,res)=>{
    res.render('main')
})

//로그인화면
app.get('/login',(req,res)=>{
    
    if(req.session.userId == 'asong'){
        // console.log(req.seesion.userId)
        res.render('logined', {userId : req.session.userId} )
    }else{
        res.render('login')
    }
})

//로그인 완료페이지
app.post('/logined', (req,res)=>{
    const myId = 'asong';
    const myPw = '1234';
    const { id , pw } = req.body
    if( myId== id && myPw == pw){
        req.session.userId = id; 
        req.session.isLogined = true;
        res.render('logined', {userId : req.session.userId})
    }else{
        res.redirect('/login')
        }
})

app.post('/login',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }else{
            res.clearCookie('connect.sid');
            res.redirect('/login',)
        }
    })
})
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});