const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    icon: {type: String},
    textMenu: {type: String},
    link: {type: String},
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'role.js'
    }
});

module.exports= mongoose.model('Menu',menuSchema );