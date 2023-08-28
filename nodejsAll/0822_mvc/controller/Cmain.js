const model = require('../model/Model');



const main = (req, res) => {
    res.render('index');
};

const Ccomments = (req,res)=>{
    res.render('comments', { lists: model }); //랜더는 뒤에 데이터를 보낼 수 있음
    //model에서 다 보내줬으니까 model.comments 말고 model로 보내면 됨
}

const comment = (req,res)=>{
    console.log(req.params); 
    // comment/100으로 접속하면 req.params에 {id: '100'} 이렇게 담김
    // :id 콜론 뒤에 붙은 변수가 key, 입력한 값이 value
    res.render('comment',{ data: model[Number(req.params.id) -1]})
}

//어디로 내보내는지 안써도 되는거? 그냥 모듈화 한거
module.exports = {
    main: main,
    comm: Ccomments,
    comment
}

//모듈 사용방법 
// //방법 1
// module.exports.main = "함수, 변수, 문자열 , 숫자"
// exports.main =null //위의 것 축약 

// //방법 2
// const test = () =>{}
// module.exports = test