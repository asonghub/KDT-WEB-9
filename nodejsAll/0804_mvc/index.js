const express = require('express')
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//임시 데이터
const comments = [
    {
        id: 1,
        userId: 'helloworld',
        date: '2023-08-02',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userId: 'happy',
        date: '2023-08-03',
        comment: '반갑습니다'
    },
    {
        id: 3,
        userId: 'lucky',
        date: '2023-08-04',
        comment: '행복하세요'
    },
    {
        id: 4,
        userId: 'good',
        date: '2023-08-05',
        comment: '좋은저녁되세요'
    },
]

app.get('/',(req,res)=>{
    res.render('index')
});

//get /comments
app.get('/comments',(req,res)=>{
    res.render('comments',{ commentInfos: comments }) //랜더링 해주면서 comments데이터를 같이 보냄(ejs에서 사용가능)
});
//get /comment/:id
app.get('/comment/:id',(req,res)=>{ //id값을 req.params 키값으로 줌. get은 쿼리도 되는데 params도 됨
    console.log(req.params);
    //console.log(req.params.id);
    const commentId = req.params.id;
    console.log(comments[commentId -1]); //배열은 0부터니까

    //출력하기
    res.render('comment',{commentInfo: comments[commentId -1]});
})

app.get('/user',(req,res)=>{
    // console.log(req.query)
    res.render('user',{commentInfos: comments })
})

app.get('/userInfo/:userId',(req,res)=>{
    console.log(req.params);
    res.render('user',{commentInfo: comments[commentId -1]})
})

//맨 마지막 선언
app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})