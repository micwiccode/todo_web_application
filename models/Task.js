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
  },
  userId:{
    type: String,
    isRequired: true
  }
});

module.exports = Task = mongoose.model('Task', TaskSchema);
