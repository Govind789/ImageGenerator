const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email: {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }
})

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;