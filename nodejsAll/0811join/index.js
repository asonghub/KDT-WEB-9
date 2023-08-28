const express = require('express');
const app= express();
const PORT = 8080;
const db = require('./models')


app.set('view engine', 'ejs');
//app.set('views','./views')//nodejs는 기본적으로 views폴더에서 views를 가져오기때문에 안써도 됨.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//라우터
app.get('/', (req,res)=>{
    res.render('index');
})
const studentRouter = require('./routes/student');
app.use('/student', studentRouter);

//true면 생성한 테이블 삭제하고 다시 만들기
db.sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, () =>{
        console.log(`http://localhost:${PORT}`);
    });
});