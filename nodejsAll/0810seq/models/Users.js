const {DataTypes} = require('sequelize')
//user에 대한 테이블 정의
const User = function(sequelize){
    const model = sequelize.define(
        'userinfo',
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false, //not null
                primaryKey: true,
                autoIncrement: true
            },
            userid:{
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name:{
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            pw:{
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        },
        {
            tableName: 'userinfo', //테이블 이름 설정
            freezeTableName: true, //true로 설정하면 이름을 복수로 설정하지 않음
            timestamps: false, //기본설정은 true, createAt & updateAt을 활성화
        }
    );
    return model
}
module.exports = User;