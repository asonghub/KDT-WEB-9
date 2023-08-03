const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));

const upload = multer({
    dest: 'uploads/'
});
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/')
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            const fileName = req.body.id + ext
            // done(null, path.basename(file.path, ext) + req.data.id + ext);
            done(null, fileName);
            // done(null, fieldname + ext);
        }
    }),
    limits:{fileSize: 5*1024*1024}
});

app.get('/',(req,res)=>{
    res.render('prac1');

});
app.post('/upload',uploadDetail.single('profile'), (req, res)=>{
    console.log(req.file);
    console.log(req.body);
    res.render('profile',{
        myImg : req.file.path,
        userInfo: req.body
    })
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})