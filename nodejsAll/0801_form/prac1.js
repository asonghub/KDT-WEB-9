const express = require('express');
const app = express();
const PORT = 8080;

//body-parser
app.use(express.urlencoded({extended:true}));//form을 전송하는 미들웨어
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router
app.get('/',(req,res)=>{//페이지로 들어가는건 get으로 열고 전송하는건 post
    console.log(req.body);
    res.render('pracIndex',{title:'get으로 정보받기'})
})

app.get('/getprac',(req,res)=>{
    console.log(req.query);
    res.render('pracResult',{
        title:'get 실습 결과',
        userInfo: req.query
    });
});

app.post('/postprac',(req,res)=>{ 
    res.render('pracResult',{
        title: 'post 실습 결과',
        userInfo: req.body
    })
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
