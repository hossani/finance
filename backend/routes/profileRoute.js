const express = require('express');
const authMiddleware = require('../middlewares/authMiddlewares');
const {updateProfile,getProfile}=require('../controllers/profile')
const router = express.Router();

router.put('/profile', authMiddleware, updateProfile);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
