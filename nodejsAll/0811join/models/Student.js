const {DataTypes} = require('sequelize')

const studentModel = (sequelize) =>{
    const Student = sequelize.define('student',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        password : {
            type: DataTypes.STRING(255), //암호화처리를 대비해서 길이를 길게
            allowNull: false,
        },
        // email: {
        //     type: DataTypes.STRING(63),
        //     allowNull: true,
        // }
        email: DataTypes.STRING(63), //속성이 하나면 이렇게 써도됨.
    });
    return Student;
}

module.exports = studentModel;