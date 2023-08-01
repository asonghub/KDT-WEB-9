const express = require('express');
const app = express();
const PORT = 8080;

//body-parser(미들웨어)
app.use(express.urlencoded({extended:true})) //form data를 받기 위해 사용
app.use(express.json()); //json data를 받기 위해 사용
//view engine
app.set('view engine','ejs');
app.set('views','./views');

//router
app.get('/', (req,res)=>{ //get방식(불러올때?)vs post방식(데이터를 전송할때 )
    // console.log(req.body); //post요청은 req.body임
    //res.send('hello')
    res.render('index',{title:'폼전송 실습'})
})
app.get('/getForm', (req, res)=>{
    console.log(req.query);
    res.render('result', {
        title: 'get요청 폼 결과 확인하기',
        userInfo: req.query 
        //객체 키를 설정해주는 것처럼 되는듯?
    });
})

app.post('/postForm',(req, res)=>{
    console.log(req.body);
    res.render('result',{
        title: 'post요청 폼 결과 확인하기',
        userInfo: req.body
    });
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});