const Transaction = require('../models/detailsTransaction');
const User=require('../models/user');
const addTransaction = async (req, res) => {
  const { montant, categorie,transaction } = req.body;
  const {userId}=req.user;
  try {
    const operation = await Transaction.create({ userId: req.user.userId,transaction, montant, categorie });
    if(operation){
     const myuser= await User.findById(userId);
     myuser.detailsTransactionID.push(operation._id);
     await myuser.save();

    }
    res.status(201).json(operation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCurrentMonthTransactions = async (req, res) => {
  const { userId } = req.user;
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  try {
    const operations = await Transaction.find({
      userId,
      createdAt: {
        $gte: new Date(currentYear, currentMonth, 1),
        $lt: new Date(currentYear, currentMonth + 1, 1),
      }
    });
    res.status(200).json(operations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateTransaction = async (req, res) => {
    try {
        const {transactionId}=req.params;
      const {montant,transaction}=req.body;
     const transactionDetails= await Transaction.findById(transactionId);
     if(montant) transactionDetails.montant=montant;
    if(transaction) transactionDetails.transaction=transaction;

     await transactionDetails.save();
      res.status(200).json(transactionDetails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    
  };

  const deleteTransaction=async(req,res)=>{
    try {
        const {transactionId}=req.params;
       const transactionDetails= await Transaction.findByIdAndDelete(transactionId);
       if(!transactionDetails)  return res.json({message:"transaction non trouvé"});
   
        res.status(200).json(transactionDetails);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  }
module.exports={addTransaction,getCurrentMonthTransactions,updateTransaction,deleteTransaction};