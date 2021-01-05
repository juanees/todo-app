const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema(
  {
    content: { type: String, required: true },
    completed: { type: Boolean, required: false },
    tags: { type: [String], required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todos", Todo);
