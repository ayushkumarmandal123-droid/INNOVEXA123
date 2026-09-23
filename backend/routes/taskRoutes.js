const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { title, subject } = req.body;

        const task = new Task({
            title: title,
            subject: subject
        });

        const savedTask = await task.save();

        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({
            message: "Task save nahi ho saka",
            error: error.message
        });
    }
});
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();

        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: "Tasks nahi mil sake",
            error: error.message
        });
    }
});

module.exports = router;