const express = require('express');
const { addTransaction, getCurrentMonthTransactions,updateTransaction,deleteTransaction } = require('../controllers/transaction');
const authMiddleware = require('../middlewares/authMiddlewares');
const router = express.Router();

router.post('/transaction', authMiddleware, addTransaction);
router.get('/transaction', authMiddleware, getCurrentMonthTransactions);
router.put('/transaction/:transactionId', authMiddleware, updateTransaction);
router.delete('/transaction/:transactionId', authMiddleware, deleteTransaction);

module.exports = router;
