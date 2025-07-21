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

module.exports = { createTask, getTasks };
