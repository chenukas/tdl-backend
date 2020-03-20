const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const database = require('./database');

const taskController = require('./tasks.controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

//routes
app.post('/tasks', taskController.createTask);
app.get('/tasks', taskController.viewTasks);
app.get('/tasks/:id', taskController.viewTaskById);
app.put('/tasks/:id', taskController.updateTaskById);
app.delete('/tasks/:id', taskController.deleteTaskById);
app.put('/tasks/:id/status', taskController.updateTaskStatusById);

app.listen(PORT, () => {
    console.log(`Application started on ${PORT}`);
});

database.connect().then(() => {
    console.log('Connected to the database');
}).catch(err => {
    console.log(err.message);
});