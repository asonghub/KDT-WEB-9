const express = require('express');
const app = express();
const session = require('express-session'); //왜 여기서 세션을 설정해야?
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( session({
    secret: 'secretKey', //세션에서 젤 중요
    resave: false,
    saveUninitialized: true,
    name: 'asong-sesion',
    cookie: { //쿠키옵션 다 쓸수있음
        maxAge: 60*1000,
        httpOnly: true,
    },

}))

//router 분리
const router = require('./routes/main');
app.use('/', router);

//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
