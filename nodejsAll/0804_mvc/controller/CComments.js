//router에서 신호를 받아서 어떤 node를 연결할지 컨트롤

const Comment = require('../model/MComment'); //model의 값 받아오기

exports.main = (req,res)=>{ //get대신 use를 써도됨. 대신 use를 쓰면 제일 위에것만읽음 ???먼말
    res.render('index')
};

exports.comments = (req,res)=>{
    res.render('comments',{ commentInfos: Comment.comments() }) //랜더링 해주면서 comments데이터를 같이 보냄(ejs에서 사용가능)
};

exports.comment = (req,res)=>{ //id값을 req.params 키값으로 줌. get은 쿼리도 되는데 params도 됨
    console.log(req.params);
    //console.log(req.params.id);
    const commentId = req.params.id;
    const comments = Comment.comments();
    console.log(comments[commentId -1]); //배열은 0부터니까

    //출력하기
    res.render('comment',{commentInfo: comments[commentId -1]});
};
