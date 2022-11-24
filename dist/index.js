"use strict";
const endpoint1 = { "ethprice": 100 };
const endpoint2 = { "btcprice": 300 };
console.log("endpoint1", endpoint1);
console.log("endpoint2", endpoint2);
const getData = (endpoint1, endpoint2) => {
    return { json: endpoint1, endpoint2 };
};
const data = getData(endpoint1, endpoint2);
console.log("data", data);
const processTask = () => {
};
// const main = () => {
//   while(true){
//   const tasks = getTasks();
//   const apiData = getData();
//   match(tasks,apiData);
//   await sleep (100);
//   }
// }
// Use cases for MVP (the first 4): 
// Example 1: Buy x ETH at market price from Quickswap with 500 USDC if Chainlink / Bitfinex BTC/USDT price is below 30000. Transaction executed just once. (We can demo this as it’ll be executed immediately)
// Example 2: Buy x ETH at market price from Quickswap with 500 USDC if Chainlink/ Bitfinex BTC/USDT price is below 14000. Transaction executed just once. (This will be scheduled)
// Example 3: Send 200 USDT to a contractor in 1 minute from the time of schedule. (For demo)
// Example 4: Send 200 USDT to a contractor on the last day of the month at 1:00AM UTC time. Recurring for 12 times. (For schedule) 
// (optional) Example 5: List 1 Bored Ape NFT on Opensea if floor price on Opensea is above 100 ETH and ETH/USD price from Chainlink is above 1500 USDT. Execute right away.
// Server-side (written in Nodejs or Javascript or another language): Guowei
// Time-based conditions: 
// Collecting of data: where is the data coming from 
// Get needed data from API/Oracle: Chainlink, API (exchange) -> every 1-2 seconds..
// Get/Handle all the tasks from all users
// Get all of the tasks:  Address of Contract of User 1,  Address of Contract of User 2,  Address of Contract of User 3,  Address of Contract of User 4, Get all of the tasks of Contract of User 1, Get all of the tasks of Contract of User 2, Get all of the tasks of Contract of User 3, etc. 
// Check the Tasks - Matching? Yes -> Send transaction (cost)
// Check if condition is matching and sending the execution transactions:
// Main.js file (for the server to run)
// Uniform function to check
// Creating of the main factory and user-owned contract (create the modules for Guowei to call): 
// Functions with user-owned contract (deposits, withdraws, tasks, cancel, transfer): Felix
// Main factory contract: Felix
