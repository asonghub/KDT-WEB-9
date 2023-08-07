const express = require('express')
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require('./routes') 
//원래는 ./routes/index.js'라고 쓰는건데 index.js로 만들면  이렇게만 쓰면됨. 
app.use('/',router);
// '/'도메인으로 들어왔을때 router를 불러옴 (루트가 /)

//example
//const nuserRouter = requires('./routes/user');
//app.use('/user',userRouter)  //루트가 /user
//이렇게 쓰면 localhost:8000/user/comment

//맨 마지막 선언
app.use('*',(req,res)=>{ //get을 쓰면 get방식만 되기 때문에 use 써주면 됨. 
    res.render('404')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

