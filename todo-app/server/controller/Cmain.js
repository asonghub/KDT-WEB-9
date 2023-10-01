const { Todo } = require("../models");
// const express = require("express");

exports.main = (req, res) => {
  res.json("success");
};

//get todo
exports.todo = async (req, res) => {
  const result = await Todo.findAll({ attributes: ["id", "title", "done"] });
  console.log(result);
  res.json(result);
};

//post todo
exports.newTodo = async (req, res) => {
  const { title } = req.body;
  console.log("post todo");
  const addone = await Todo.create({
    title,
    done: false,
  });
  res.json(addone);
};

//patch todo
exports.editTodo = async (req, res) => {
  const { todoId } = req.params;
  const { done, title } = req.body;
  const result = await Todo.update({ done, title }, { where: { id: todoId } });
  console.log("수정 완", result);
  res.json({ result });
};

exports.deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  await Todo.destroy({ where: { id: todoId } });
  res.json({ result: true });
};
