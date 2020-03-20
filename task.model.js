const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: String,
    status: { type: Boolean, default: false},
    createdOn: { type: Date, default: new Date()},
    updatedOn: { type: Date, default: new Date()}
});

module.exports = mongoose.model('task', taskSchema); //collection name & structure