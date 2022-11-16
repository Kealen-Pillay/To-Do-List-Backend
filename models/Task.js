const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

module.exports = Task = mongoose.model("task", TaskSchema);
