const express = require("express");

const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

// GET all tasks
// POST create a task
router.route("/")
  .get(getTasks)
  .post(createTask);

// GET one task
// PUT update task
// DELETE task
router.route("/:id")
  .get(getTaskById)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;