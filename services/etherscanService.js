const axios=require("axios");

const getTransactionByAddress= async(address)=>{
    const res=await axios.get(`https://api.etherscan.io/api`,{
    params:{
      module:'account',
      action:'txlist',
      address,
      startblock:0,
      endblock:99999999,
      sort:'asc',
      apikey:process.env.ETHERSCAN_API_KEY,
    },
  })
  return res.data.result;
}

module.exports={getTransactionByAddress};