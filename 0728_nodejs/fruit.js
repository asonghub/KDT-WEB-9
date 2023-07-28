const express = require('express');

const app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use('/public', express.static('./public'))

app.get('/',(req,res)=>{
    res.render('fruit',{
        fruit:[
        {name:'apple', kor:'사과'},
        {name:'banana', kor:'바나나'},
        {name:'grape', kor:'포도'},
        {name:'peach', kor:'복숭아'}
        ]
    });
});

app.get('/mul',(req,res)=>{
    res.render('mul',{name: [2,3,4,5,6,7,8,9]})
})
    

app.listen(8080,()=>{
    console.log('서버열림')
    console.log('http://localhost:8080/mul')

})