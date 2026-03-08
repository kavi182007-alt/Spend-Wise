const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // in reference with User model
        required: true
    },
    title: {
        type: String,
        required: [true, 'Title'],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, 'AMount']
    },
    type: {
        type: String,
        enum: ['income', 'expense'], 
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', transactionSchema);