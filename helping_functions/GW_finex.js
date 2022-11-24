// const express = require("express");
require("dotenv").config();
// const router = express.Router();
const axios = require("axios");
// var _ = require('lodash');

const baseUrl = "https://api-pub.bitfinex.com/v2/";
const pathParams = "tickers"
const queryParams = "symbols=fUSD,tBTCUSD"

const callData =async() => {
    try {
        const response = await axios.get(`${baseUrl}/${pathParams}?${queryParams}`);
        const finexData = response.data;
        console.log("finexData",finexData)
        // res.status(200).json(finexData)
        return finexData
    
    } catch (error) {
        console.error(error);
    
    }
    return finexData
}
callData()


// module.exports = router;