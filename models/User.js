const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name'],
    },
    email: {
        type: String,
        required: [true, 'an email required'],
        unique: true, // There can be no duplicate emails
    },
    password: {
        type: String,
        required: [true, 'password'],
        minlength: 8,
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('User', userSchema);