const express=require("express");
const app= express();
const dotenv=require("dotenv");
const connectDB=require("./config/db.js");
const transactionRoutes=require("./routes/transactionRoute.js");
const {getEthererumPrice}=require("./services/ethereumPriceService.js");
const EthereumPrice=require("./models/EthererumPrice.js");
const cron=require("node-cron");
dotenv.config();
connectDB();

const port=process.env.PORT;
app.use("/api", transactionRoutes);

// used to fetch Ethereum price every 10 minutes
cron.schedule("*/10 * * * *", async(req, res)=>{
    const price= await getEthererumPrice();
    const newPrice= new EthereumPrice({price});
    await newPrice.save();
    console.log(`Ethereum price updated: ${price}`);
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})