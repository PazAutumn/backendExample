const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: { type: String, default: 'Sin información' },
    age: { type: Number },
    owner: { type: String, default: 'Sin información' },
    breed: { type: String, default: 'Sin información' },
    type: {
        type: String,
        value: ['Cat', 'Dog']
    },
    genre: {
        type: String,
        value: ['Male', 'Female']
    },
    address: { type: String, default: 'Sin información' }
});

module.exports = mongoose.model('Patient', patientSchema);