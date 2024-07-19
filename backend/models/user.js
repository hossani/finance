const mongoose =require( "mongoose");

const user=new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    newsletter:{type:Boolean,default:false},
    detailsTransactionID: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TransactionDetails' }]

})

module.exports= mongoose.model('User',user);