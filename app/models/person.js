const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name:{
        last: {type: String, required: true, maxLength: 100},
        first: {type: String, required: true, maxLength: 100}
    },
    birthday: {type: Date},
    gender: {type: String, enum: ['Male', 'Female','Gay']},
    address: {
        number: String,
        street: String,
        district: String,
        city: String,
    },
    phone: {type: String},
    email: {type: String, unique: true, required: true, trim: true},
    image: { type: String, maxLength: 250 },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'role.js'
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization.js'
    },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization.js'
    },

});

module.exports = mongoose.model('Person', personSchema);