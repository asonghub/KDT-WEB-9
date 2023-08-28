const {Student, StudentProfile, Classes} = require('../models/index')
//const models = require('../models')하면 
//밑에서 쓸때 models.Student 이딴식으로 써야댐 
//객체구조분해 해서 가져온것임. 

exports.main = (req, res) =>{
    res.render('index');
};

exports.post_student = async(req, res) =>{
    try {
        const { userid, password, email, name, major } = req.body
        const user = await Student.create({
            userid,
            password,
            email,
            studentProfile: { //테이블명 , 1:1 이고 같이 데이터가 들어가기 때문에 여기서 이렇게 쓸수있음.
                name,
                major,
            },
        },{
            include: StudentProfile, // 모델을 어디서 데리고 왔는지 여기서..  여러개를 가져온 경우에는 배열 형태로 여러개 순서대로
            //[{model: StudentProfile}]
        });
        console.log(user)
        res.send(user)
    } catch (error) {
        console.log(error)
    }
};

exports.post_class = async(req, res) =>{
    try {
        const { name, room, code, teacher_name, studentId } = req.body;
        const classes = await Classes.create({
            name,
            room,
            code,
            teacher_name,
            studentId
        });
        res.send(classes);
    } catch (error) {
        console.log(error)
    }

}

exports.get_student = async (req, res ) =>{
    try {
        //include: 쿼리를 실행할때 관련된 모델의 데이터도 함께
        //조회할 수 있도록 하는 옵션 

        const student = await Student.findAll({
            attributes: ['id', 'userid', 'email'],
            include: [{ model: StudentProfile, attributes: ['major', 'name'] }] //?
        });
        res.send(student)
    } catch (error) {
        console.log(error)
    }
}