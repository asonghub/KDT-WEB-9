const Visitor = require('../model/Mvisitor')

exports.main = (req, res)=>{
    res.render('index');
};
    //res.render('visitor',{data: Visitor.getVisitors()});

exports.getVisitors = (req,res) =>{ //방명록 전체 가져오기 
    Visitor.getVisitors((rows)=>{
        res.render('visitor', { data: rows });//rows를 data에 담아서 visitor.ejs로 보내줌
    });
};

exports.getVisitor =(req,res) =>{
    Visitor.getVisitor(req.query.id, (result) =>{
        res.render('visitor', {data: result});
    });
    };
exports.postVisitor = (req,res)=>{
    Visitor.postVisitor(req.body, (result)=>{
        res.send({id: result.insertId, name: result.name, comment:result.comment });
        // callback(rows);
    });
}

exports.patchVisitor = (req,res)=>{
    Visitor.patchVisitor(req.body, ()=>{ //req.body를 보내고 콜백함수 들어감. 수정할때는 받아올게 없으니까 매개변수 필요없음. 
        res.send({result:true});
    })
}

exports.deleteVisitor = (req,res)=>{
    // res.send('방명록 하나 삭제');
    Visitor.deleteVisitor(req.body, ()=>{
        res.send({result:true});
    })
}