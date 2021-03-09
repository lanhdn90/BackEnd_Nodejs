const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    taskName:{ type: String, required: true, trim: true, maxLength: 500 },
    note: {type: String},
    video:{type: String},
    internShipId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'InternShip.js'
    },
});

module.exports = mongoose.model('Task', taskSchema);