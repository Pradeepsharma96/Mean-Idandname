const mongoose = require('mongoose');

const name = mongoose.Schema({
    name : {
        type : String,
        required : true,
        },
    id : {
        type : Number,
        required : true,
    }
})
module.exports = mongoose.model('name',name)