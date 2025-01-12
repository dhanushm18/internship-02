const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    specifications: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerPhoneNumber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Equipment', equipmentSchema);