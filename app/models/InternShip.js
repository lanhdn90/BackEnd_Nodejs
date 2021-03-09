const mongoose = require('mongoose')
const Schema = mongoose.Schema

const internShipSchema = new Schema({
    courseNam: { type: String, required: true, trim: true, maxLength: 500 },
    startDay: {type: Date, default: Date.now},
    expiryDate: {type: Number},
    status: {type: Boolean},
    personId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'person.js'
    },

});

module.exports = mongoose.model('InternShip', internShipSchema);
