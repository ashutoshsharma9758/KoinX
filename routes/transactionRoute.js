const express=require("express");
const {fetchTransaction, getExpenseAndPrice} =require("../controllers/transactionController.js");
const router=express.Router();

// For task1
router.get("/transactions/:address", fetchTransaction);

// for task3
router.get("/expense/:address", getExpenseAndPrice);
module.exports=router;