const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//router
const mRouter = require('./routes/user')

app.get('/',(req,res)=>{
    res.render('index');
});

app.use('/user', mRouter);

app.use('*', (req,res)=>{
    res.render('404');
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});