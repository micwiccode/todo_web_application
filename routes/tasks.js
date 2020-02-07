const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

//@route GET /tasks
router.get('/', (req, res) => {
  Task.find()
    .sort({ date: -1 })
    .then(tasks => res.json(tasks));
});

//@route POST /tasks
router.post('/', (req, res) => {
  const newTask = new Task({
    name: req.body.name,
  });
  newTask
    .save()
    .then(task => res.json(task))
    .catch(err => console.log(err));
});

//@route DELETE /tasks/id
router.delete('/:id', (req, res) => {
  Task.deleteOne({ _id: req.params.id })
    .then(() => res.json({message: `Task with id ${req.params.id} was deleted successfully`}))
    .catch(err => res.status(404).json({message: `Task with id ${req.params.id} can not be deleted`}));
});

module.exports = router;
