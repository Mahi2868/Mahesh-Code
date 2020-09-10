const fs = require('fs');

const UserSchema = fs.writeFile({
    id : {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    salory: {
        type: Number,
        required: true
    }
});

module.exports = fs.model('users', UserSchema);