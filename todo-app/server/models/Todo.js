const { DataTypes } = require("sequelize");
//user에 대한 테이블 정의
const Todo = function (sequelize) {
  const model = sequelize.define("todo", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, //not null
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return model;
};
module.exports = Todo;
