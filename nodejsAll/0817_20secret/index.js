const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 8000;
let pass = '';
const salt = crypto.randomBytes(16).toString('hex') //salt값을 랜덤으로 저장 
const leng = 1000 //반복횟수
const key = 64; //생성할 키의 길이
const algorithm = 'sha512'

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/login',(req,res)=>{
    const {pw} = req.body; //비밀번호 암호화 할거니까 pw만 받으면 됨
    //createHash: 지정한 알고리즘을 이용하여 해시 생성
    // const pass = crypto.createHash('sha512').update(pw).digest('base64');

    //pbkdf2(Sync) : Sync가 붙으면 동기  : 비밀번호 기반 키 도출 함수
    pass = crypto.pbkdf2Sync(pw, salt , leng, key, algorithm ).toString('base64');
    //salt, 반복횟수, 알고리즘은 숨겨야함 (환경변수에 넣어둠)
    res.send(pass);
});

app.post('/verify', (req,res)=>{
    const {pw} = req.body;

    //기본적인 방법
    // const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algorithm ).toString('base64');
    // if( compare === pass){
    //     res.send(true)
    // }else{
    //     res.send(false)
    // }

    //응용쓰
    const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algorithm );
    console.log(compare)
    const result = crypto.timingSafeEqual(compare, Buffer.from(pass, 'base64'));
    //timingSafeEqual: 두개의 버퍼를 상수시간으로 비교하는 함수(동시에 비교  )
    res.send(result);
})


app.listen( PORT , ()=>{
    console.log(`http://localhost:${PORT}`);
});