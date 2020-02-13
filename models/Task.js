const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  isDone:{
    type: Boolean,
    default: false
  }
});

module.exports = Task = mongoose.model('Task', TaskSchema);
