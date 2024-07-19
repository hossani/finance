const express=require('express');
const route=express.Router();
const {subscribeUser,unsubscribeUser}=require('../controllers/newsletter')
const authMiddleware = require('../middlewares/authMiddlewares');

route.put('/subscribe',authMiddleware, subscribeUser);
route.put('/unsubscribe', authMiddleware,unsubscribeUser);


module.exports = route;

