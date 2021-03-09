const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organizationSchema = new Schema({
    name: { type: String, required: true, trim: true, maxLength: 500 },
    address: {
        number: String,
        street: String,
        district: String,
        city: String,
    },
    phone: {type: String},
    fax: {type: String,},
    image: { type: String, maxLength: 250 },
    logo: { type: String, maxLength: 250 },
    note: {type: String},
    email: {type: String, unique: true, required: true, trim: true},
    startDay: {type: Date, default: Date.now},
    expiryDate: {type: Number},
    status: {type: Boolean},
    sendEmail: {type: Boolean}
});

module.exports = mongoose.model('Organization', organizationSchema);
