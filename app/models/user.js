const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {type: String, unique: true, required: true, trim: true},
    password: {type: String, required: true, trim: true, minlength: 6},
    status: {type: Boolean},
    personId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'person.js'
    }
});

module.exports = mongoose.model('User', userSchema);