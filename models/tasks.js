const mongoose= require('mongoose');

const tasksSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('task',tasksSchema);