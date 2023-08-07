const express = require('express')
const router = express.Router(); //express의 라우터만 가져옴 
const controller = require('../controller/CComments') //controller와 연결



router.get('/', controller.main);

//get /comments
router.get('/comments',controller.comments);
//get /comment/:id
router.get('/comment/:id',controller.comment );


router.get('/user',(req,res)=>{
    // console.log(req.query)
    res.render('user',{commentInfos: comments })
})

router.get('/userInfo/:userId',(req,res)=>{
    console.log(req.params);
    res.render('user',{commentInfo: comments[commentId -1]})
})


//외부에서 사용하려면 이 전체를 모듈로 만들어서 내보내면 됨
module.exports = router;