const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8080;

app.set('view engine','ejs');
app.set('views','./views');


app.use(express.json()); //json data를 받기 위해 사용
// cookie-parser 
// 일반쿠키
app.use(cookieParser());

const cookieConfig = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    // 현재시간부터 1초인 1000을 기준으로 24시간까지 늘린 것
    httpOnly: true,
  }

app.get('/', (req, res)=>{
  const checkCookie = req.cookies.popup;
  // console.log(checkCookie)
    res.render('index', {checkCookie})
})
app.post('/cooked', (req, res) => {
    res.cookie('popup', 'checked', cookieConfig);
    res.render('index');
  });


app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
})