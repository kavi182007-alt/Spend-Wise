const Transaction = require('../models/Transaction');

// 1. ADD TRANSACTION (Create)
exports.addTransaction = async (req, res) => {
    try {
        const { title, amount, type } = req.body;
        
        const transaction = await Transaction.create({
            userId: req.user.id, // Logged-in user's ID
            title,
            amount,
            type
        });

        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. GET ALL TRANSACTIONS (Read)
exports.getTransactions = async (req, res) => {
    try {
        // fetch only the current user's transactions
        const transactions = await Transaction.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. DELETE TRANSACTION (Delete)
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        // Check if transaction belongs to the current logged-in user
        if (transaction.userId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await transaction.deleteOne();
        res.json({ message: 'Transaction removed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};