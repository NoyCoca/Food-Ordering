const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type:String,
        required:true
    }
})

const User = mongoose.model('user', user);
module.exports = User;
