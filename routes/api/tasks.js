const express = require('express');
const Task = require('../../models/Task');
const auth = require('../../middleware/auth');

const router = express.Router();

//@route GET /tasks
router.get('/', (req, res) => {
  Task.find()
    .sort({ date: -1 })
    .then(tasks => res.json(tasks));
});

//@route POST /tasks
router.post('/', auth, (req, res) => {
  const newTask = new Task({
    name: req.body.name,
  });
  newTask
    .save()
    .then(task => res.json(task))
    .catch(err => console.log(err));
});

//@route PUT /tasks/id
router.put('/:id', auth, (req, res) => {
  const isTaskDone = Task.findById(req.params.id)
    .then(task =>
      task.update({ isDone: !task.isDone }).then(() =>
        res.json({
          message: `Task with id ${req.params.id} was updated successfully`,
        })
      )
    )
    .catch(err =>
      res
        .status(404)
        .json({ message: `Task with id ${req.params.id} can not be updated` })
    );
});

//@route DELETE /tasks/id
router.delete('/:id', auth, (req, res) => {
  Task.findById(req.params.id)
    .then(item =>
      item.remove().then(() =>
        res.json({
          message: `Task with id ${req.params.id} was deleted successfully`,
        })
      )
    )
    .catch(err =>
      res
        .status(404)
        .json({ message: `Task with id ${req.params.id} can not be deleted` })
    );
});

module.exports = router;
