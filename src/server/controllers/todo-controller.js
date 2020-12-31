const Todo = require('../models/todo-model')

createTodo = (req, res) => {
  const body = req.body;
  const todo={ name: body.name, cratedAt: Date.now() }
  todos.push(todo);
  return res.status(200).json({ success: true, data: todo });
};

getTodos = (req, res) => {
  return res.status(200).json({ success: true, data: todos });
};

updateTodo = (req, res) => {
  return res.status(200).json({ success: true, id: req.params.id });
};
deleteTodo = (req, res) => {
  return res.status(200).json({ success: true, id: req.params.id });
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
