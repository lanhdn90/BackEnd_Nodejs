const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    content:{ type: String, required: true, trim: true, maxLength: 500 },
    image: { type: String, maxLength: 250 },
    answer_A: {type: String},
    answer_B: {type: String},
    answer_C: {type: String},
    answer_D: {type: String},
    result:{type: String},
    taskId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'task.js'
    }
});

module.exports = mongoose.model('Question', questionSchema);
