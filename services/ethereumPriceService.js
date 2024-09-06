const axios=require("axios");

const getEthererumPrice= async()=>{
    const res= await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr");
    return res.data.ethereum.inr;
}

module.exports={getEthererumPrice};