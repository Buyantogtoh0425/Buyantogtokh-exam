const { model, Schema } = require("mongoose");


const taskScheme = new Schema({
    text: String, 
    isDone:{ type: Boolean, default: false},
    createdDate: { type: Date, default: Date.now, required: false},

});


 const TaskModel = model("Task", taskScheme);
module.exports = TaskModel;