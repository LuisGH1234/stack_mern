const express = require('express');
const router = express.Router();
//const Task = require('../model/task');

const Tasks = require('./tasks.json');

router.get('/', async (_, res) => {
    try {
        //const tasks = await Task.find();
        //res.json(tasks);    
        res.json(Tasks);
    } catch (error) {
        console.log('Error: ' + error);
        res.json({ status: 'error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        console.log('Error: ' + error);
        res.json({ status: 'error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, desc } = req.body;
        const task = new Task({ title, desc });
        await task.save();
        res.json({ status: 'ok' });
    } catch (error) {
        console.log('Error: ' + error);
        res.json({ status: 'error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ status: 'ok' });
    } catch (error) {
        console.log('Error: ' + error);
        res.json({ status: 'error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        console.log(req.body);
        const { title, desc } = req.body;
        const newTask = { title, desc }
        await Task.findByIdAndUpdate(req.params.id, newTask);
        res.json({ status: 'ok' });
    } catch (error) {
        console.log('Error: ' + error);
        res.json({ status: 'error' });
    }
});

module.exports = router;