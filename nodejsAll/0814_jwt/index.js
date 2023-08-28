const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const secret='secretKey'

app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/login',(req,res)=>{
    //로그인 되었다고 가정하고 
    const { id, pw} = req.body //jwt에는 보통 비번을 넣지 않음. jwt은 공개되어있는 값임. 

    const token = jwt.sign({id},secret );
    res.send({result: true, token});
})

app.post('/verify',(req,res)=>{
    console.log(req.headers.authorization)
    const auth = req.headers.authorization
    const token = auth.split(' ')
    // const[bearer, token] = auth.split(' ')
    if(token[0] ==='Bearer'){
        jwt.verify(token[1], secret, (err, decoded )=>{
            if(err){
                return res.status(403).send({message:'검증실패'});//인증오류 
            }
            console.log(decoded)//?
            res.send({user: decoded});
        });
    }else{
        res.send({message: '잘못된 인증방식입니다'})
    }
})

app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}`)
})