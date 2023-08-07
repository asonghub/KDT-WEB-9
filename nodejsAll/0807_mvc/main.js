const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');


app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//mysql 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: '0807',
    password: 'mawoss3223',
    database: 'kdt9',
    //port : 3306,
})
conn.connect( (err)=>{
    if(err){
        console.log('error');
        return;
    }
    console.log('connect');
})

// const indexRouter = require('./routes');
// app.use('/', indexRouter);
app.get('/',(req,res)=>{
    res.render('index');
});

//get /visitor 방명록 전체 보이기
app.get('/visitor', (req,res)=>{
    const query = 'SELECT * FROM visitor' //visitor 전체 선택
    conn.query(query, (err, rows)=>{ //mysql접속. 
        console.log(rows); //객체형태의 배열이 옴(visitor에 담긴 데이들이 rows에 옴)
        res.render('visitor', { data: rows });//rows를 data에 담아서 visitor.ejs로 보내줌
    });
});

//get /visitor/get 방명록 하나 조회
app.get('/visitor/get', (req,res)=>{
    res.send('방명록 하나 조회');
});

//post /visitor/write 방명록 하나 생성
app.post('/visitor/write', (req,res)=>{
    const query = `INSERT INTO visitor (name, comment) VALUES ('${req.body.name}', '${req.body.comment}')` //''안넣으면 변수로 인식함
    conn.query(query, (err, rows)=>{
        console.log('rows', rows)
        res.send({id: rows.insertId, name: req.body.name, comment:req.body.comment });
    })
});

//patch /visitor/edit 방명록 하나 수정
app.patch('/visitor/edit',(req,res)=>{
    res.send('방명록 하나 수정');
});

//delete /visitor/delete 방명록 하나 삭제
app.delete('/visitor/delete',(req,res)=>{
    res.send('방명록 하나 삭제');
});

app.use('*', (req, res)=>{
    res.render('404');
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});