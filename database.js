const mongoose = require('mongoose');

const username = 'CHENUKAS';
const password = 'chenukas';

const connect = () => {
    return mongoose.connect(
        `mongodb+srv://${username}:${password}@tasks-4aryc.mongodb.net/test?retryWrites=true&w=majority`
    );
};

module.exports = {
    connect
};