const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','ejs');
app.set('views','./views');

app.get('/', (req,res)=>{
    res.render('login',{title: 'axios-get 실습'})
})
app.get('/axios',(req,res)=>{
    //res.send({result: true, data: res.query});
    res.send(req.query); //페이지를 여는게 아니라 결과값만 보내주는거여서 send임.
})



app.get('/prac2',(req,res)=>{
    res.render('axios',{
        myId: 'asong',
        myPw: '1234',
    })
})
app.post('/axios', (req,res)=>{ // 요청 클라이언트 // 응답 서버
    const id='kdt9';
    const pw = '1234';
    if(id === req.body.id&& pw===req.body.pw){
        res.send({result:true, userInfo: req.body})
    }else{
        res.send({result:false, userInfo: null})
    }
    // console.log('back',req.body);
    // res.send(req.body);
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})