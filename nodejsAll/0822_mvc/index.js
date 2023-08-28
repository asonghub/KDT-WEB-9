const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//router 분리
const router = require('./routes/main'); //index로 하면 생략가능함(./routes)만 써도됨
app.use('/', router);


//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
