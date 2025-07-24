const Task = require('../models/task');

// @desc   Create new task
// @route  POST /api/tasks
// @access Private
const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await Task.create({
      user: req.user._id,
      title,
      description
    });

    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create task' });
  }
};

// @desc   Get all tasks for the logged-in user
// @route  GET /api/tasks
// @access Private
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to get tasks' });
  }
};

const updateTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: 'Task not found' });
  if (task.user.toString() !== req.user.id)
    return res.status(401).json({ message: 'Not authorized' });

  task.title = title || task.title;
  task.description = description || task.description;
  await task.save();

  res.json(task);
};

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  if (task.user.toString() !== req.user.id)
    return res.status(401).json({ message: 'Not authorized' });

  await task.deleteOne();
  res.json({ message: 'Task deleted' });
};


module.exports = { createTask, getTasks, updateTask, deleteTask };
