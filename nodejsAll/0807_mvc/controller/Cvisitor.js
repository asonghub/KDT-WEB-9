const Visitor = require('../model/Mvisitor')

exports.main = (req, res)=>{
    res.render('index');
};

exports.getVisitors = (req,res) =>{
    res.render('visitor',{data: Visitor.getVisitors()});
}