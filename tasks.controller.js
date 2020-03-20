const Task = require('./task.model');

const createTask = (req, res) => {

    //check if name is available in the body
    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Name is undefined"
        });
    }

    //create new task object from body
    const task = new Task(req.body);

    //save task to database
    task.save().then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
};

const viewTasks = (req, res) => {
    Task.find({}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
};

const viewTaskById = (req, res) => {
    Task.findById(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(502).json({
            success: false,
            message: err.message
        });
    });
};

const updateTaskById = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Name is undefined"
        });
    }

    Task.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        description: req.body.description,
        updatedOn: new Date()
    }, {new: true}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(503).json({
            success: false,
            message: err.message
        });
    });
};

const deleteTaskById = (req, res) => {
    Task.findByIdAndDelete(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(504).json({
            success: false,
            message: err.message
        });
    });
};

const updateTaskStatusById = (req, res) => {
    Task.findByIdAndUpdate(req.params.id, {
        status: true
    }, {new: true}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(504).json({
            success: false,
            message: err.message
        });
    });
};

module.exports = {
    createTask,
    viewTasks,
    viewTaskById,
    updateTaskById,
    deleteTaskById,
    updateTaskStatusById
}