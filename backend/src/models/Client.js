const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    email: {
        type: String,
        //required: true,
    },
    name: String,
    password: {
        type: String,
        //required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    admin: Boolean
});

module.exports = mongoose.model('Cliente', ClienteSchema);