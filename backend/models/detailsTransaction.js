const mongoose =require( "mongoose");

const transactionDetails= new mongoose.Schema({
    transaction:{type:String,required:true},
    montant:{type:Number,require:true},
    categorie:{type:String,require:true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User',required:true }

},{timestamps:true});

module.exports= mongoose.model('TransactionDetails',transactionDetails);