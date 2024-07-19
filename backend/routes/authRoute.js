const express=require('express');
const route=express.Router();
const {signin,login}=require('../controllers/auth')

route.post('/register', signin);
route.post('/login', login);


module.exports = route;

