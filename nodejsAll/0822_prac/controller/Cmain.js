const students = require('../model/Model');

exports.main = (req, res) => {
    res.render('index');
};

exports.users = (req, res)=>{
    console.log(students)
    res.render('users',{ lists : students })
}

exports.register = (req, res)=>{
    // console.log(req.body);
    const { name, gender, major} = req.body
    let data = {
        userid: students.length +1,
        name,
        gender,
        major
    }
    students.push(data);
    res.send(req.body)
}


exports.user = (req, res)=>{
    console.log(req.params)
    res.render('user', { data: students[Number((req.params.userid)-1)] })
}