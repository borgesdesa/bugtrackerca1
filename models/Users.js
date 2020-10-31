const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        require: false
    },
});

module.exports = mongoose.model('users', UsersSchema);