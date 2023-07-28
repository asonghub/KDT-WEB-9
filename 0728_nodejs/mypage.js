const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('/views','./views');

app.use('/public', express.static('./public'));

app.get('',(req, res) => {
    // res.send('과일판매 페이지 입니다....🍎')
    res.render('myindex');

})

app.get('/a',(req, res) => {
    res.render('apple');
})

app.get('/b',(req, res) => {
    res.render('banana');
})

app.get('/g',(req, res) => {
    res.render('grape');
})


app.listen('8800',()=>{
    console.log('http://localhost:8800');
})