const {DataTypes} = require('sequelize')

const studentProfileModel = (sequelize) =>{
    const StudentProfile = sequelize.define('studentProfile', { //테이블은 다 소문자인데, 만약에 앞에를 대문자로 쓰면 외래키 첫문자가 대문자됨.
        id: {
            type: DataTypes. INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        major: {
            type: DataTypes.STRING(31),
            allowNull: false
        }
    });
    return StudentProfile;
}
module.exports = studentProfileModel