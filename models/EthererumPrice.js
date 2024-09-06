const mongoose=require("mongoose");
const mongoSchema=mongoose.Schema;
const EthereumPriceSchema=new mongoSchema({
    price:Number,
    timestamp:{
        type:Date,
        default:Date.now
    }
})

const EthereumPrice= mongoose.model("EthereumPrice", EthereumPriceSchema);
module.exports= EthereumPrice;