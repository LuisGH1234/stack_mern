const express = require('express');
const router = express.Router();
const Task = require('../model/task');

function trycatch(fn) {
    return (req, res, next) => 
        Promise.resolve(fn(req, res, next))
            .catch(next);
}

/*router.get('/', async (_, res, next) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.log('Error: ' + error);
        res.json({ status: 'error' });
    }
});*/

router.get('/', trycatch(async (req, res, next) => {
    throw "Error 123 prueba fn trycatch";
    const tasks = await Task.find();
    res.json(tasks);
}));

router.get('/:id', trycatch(async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
}));

router.post('/', trycatch(async (req, res, next) => {
    const { title, desc } = req.body;
    const task = new Task({ title, desc });
    await task.save();
    res.json({ status: 'ok' });
}));

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

//Personal Error Handling Middleware
router.use((err, req, res, next) => {
    console.log('Task Route Error: ' + err);
    res.status(500).json({ status: 'error' });
});

module.exports = router;