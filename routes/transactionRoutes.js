const express = require('express');
const router = express.Router();
const { addTransaction, getTransactions, deleteTransaction } = require('../controllers/transactionController');
const { protect } = require('../middleware/authMiddleware');

// // Temporarily empty controllers for checking 
// router.get('/', protect, (req, res) => {
//     res.json({ message: `Hi ${req.user.name}!` });
// });

// All routes are protected
router.route('/')
    .get(protect, getTransactions)
    .post(protect, addTransaction);

router.route('/:id')
    .delete(protect, deleteTransaction);

module.exports = router; 