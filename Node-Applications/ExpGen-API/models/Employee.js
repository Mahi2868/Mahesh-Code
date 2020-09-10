const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    salory: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('EmployeeDetails', PostSchema);