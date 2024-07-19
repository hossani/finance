import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user.js';
import transactionReducer from './transaction.js'
export default configureStore({
    reducer:{
       user:userReducer,
       transaction:transactionReducer,
    }
});
