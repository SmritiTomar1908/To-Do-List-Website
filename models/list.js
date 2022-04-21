const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const Lists = mongoose.model('Lists' , listSchema);

module.exports = Lists;


