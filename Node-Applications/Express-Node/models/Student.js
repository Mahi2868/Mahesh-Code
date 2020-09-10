const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    rollNo: {
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
    cls: {
        type: String,
        required: true
    },
    medium: {
        type: String,
        required: true
    },
    marks: {
        type: Array,
        required: true
    },
    address: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('StudentDetails', PostSchema);