const express = require('express')
// import express form 'express' 같은 문법임. 
const app = express()
const PORT = 8000;

app.set("view engine", 'ejs');//서버의 속성을 지정하는게 set, view engine을 ejs속성으로 지정
app.set('views','./views');

//정적인 파일 불러오기
app.use('/public', express.static('./public'))


app.get('/' , (req, res) => { // '/'은 domain
    //send() 클라이언트에 응답 데이터를 보낼 때 사용
    // res.send('hello express');
    res.send({result : true, code:1000, message: '회원가입 성공', data:{name:'martin'}}) //뭐를 성공...? 왜 중괄호 감싸징...
})
//res는 프론트로 보내줌 

app.get('/kdt9' , (req, res) => { // '/'은 domain
    res.render('test', { name: 'asong'})//ejs의 이름을 적어주면 폴더에서 ?? 
    //render() 뷰 엔진 렌더링, 렌더링은 파일을 읽으면서 데이터까지 보내줌. 
    //res.send('hello kdt9')
})

app.get('/warm', (req,res)=>{
    res.render('warm')
})

app.get('/fruit', (req,res)=>{
    res.render('fruit')
})

app.listen( PORT, () =>{
    console.log(`http://localhost:${PORT}`);
})//서버를 열어줌