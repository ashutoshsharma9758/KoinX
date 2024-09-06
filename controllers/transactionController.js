const EthereumPrice = require("../models/EthererumPrice.js");
const Transaction=require("../models/Transaction.js");
const {getTransactionByAddress}= require("../services/etherscanService.js");

const fetchTransaction=async(req, res)=>{
    const {address}=req.params;
    try{
        const transactions=await getTransactionByAddress(address);
        for(const tx of transactions){
            const newTx=new Transaction(tx);
            await newTx.save();
        }
        res.json(transactions);
    }
    catch(err){
        res.status(500).json({message:"Error fetching transations", err});
    }
};

const getExpenseAndPrice=async(req, res)=>{
    const {address}=req.params;
    try{
        const transaction=await Transaction.find({from:address});
        const ethereumPrice=await EthereumPrice.findOne().sort({timestamp:-1});
        let totExpense=0;
        for(let i=0; i<transaction.length; i++){
            const tx=transaction[i];
            totExpense+=(parseInt(tx.gasUsed)*parseInt(tx.gasPrice))/1e18;
        }
        res.json({totExpense, ethereumPrice:ethereumPrice.price})
    }
    catch(err){
        res.status(500).json({message:"Error in expense", err});
    }
}
module.exports={fetchTransaction, getExpenseAndPrice};