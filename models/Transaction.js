const mongoose=require("mongoose");
const mongoSchema=mongoose.Schema;

const TransactionSchema=new mongoSchema({
    address:String,
    blockNumber:String,
    timeStamp:String,
    hash:String,
    nonce:String,
    blockHash:String,
    transactionIndex:String,
    from:String,
    to:String,
    value:String,
    gas:String,
    gasPrice:String,
    isError:String,
    txreceipt_status:String,
    input:String,
    contractAddress:String,
    cumulativeGasUsed:String,
    gasUsed:String,
    confirmations:String,
});

const Transaction=mongoose.model("Transaction", TransactionSchema);
module.exports=Transaction;