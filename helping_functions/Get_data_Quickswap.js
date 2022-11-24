
// const {ethers} = require ("ethers");
import { ethers } from "ethers";
import { ChainId, Token, WETH, Fetcher, Route } from "@uniswap/sdk";
import { Provider } from "urql";
import * as dotenv from 'dotenv'
dotenv.config()
// console.log(process.env);

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
/**
 * Get ETH/USDC price from Quickswap on-chain from the Graph (better method), or
 * from the contract (Quickswap docs) directly: Lam
 * Params:
 */


function fetchWETHUSDCDataQuickswap() {
  const USDC = new Token(
    ChainId.MAINNET,
    "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", // USDC

    18
  );
  console.log(USDC.chainId)

  const WETH = new Token(
    ChainId.MAINNET,


    "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619", // WETH
    18
  );
  let my_provider = process.env.MUMBAI_TESTNET
  const pair = Fetcher.fetchPairData(USDC, WETH, my_provider);
  console.log(pair)
  const route = new Route([pair], WETH[USDC.chainId]);
  console.log('Route is', route)

  // console.log(route.midPrice.toSignificant(6)); // 201.306, this is to get WETH --> USDC
  // console.log(route.midPrice.invert().toSignificant(6)); // 0.00496756, for USDC --> WETH
  console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
  priceOfWETHToUSDC = route.midPrice.toSignificant(6)
  console.log(priceOfWETHToUSDC)
  return priceOfWETHToUSDC
}

while (true) {
  fetchWETHUSDCDataQuickswap();
  sleep(5000); // 'Sleep' every 5 seconds
}
main()
