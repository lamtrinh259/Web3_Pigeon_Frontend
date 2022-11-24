// import qs from 'quickswap-sdk'
// console.log("qs",qs)
import * as dotenv from "dotenv";
dotenv.config();
import { ChainId, Token, WETH, Fetcher, Trade, Route, TokenAmount, TradeType } from 'quickswap-sdk'
import { Percent } from 'quickswap-sdk'
import { ethers } from "ethers"

console.log("PTEKEY",String(process.env.PTEKEY))
console.log(String(process.env.MUMBAI_URL))
const provider = new ethers.providers.JsonRpcProvider(String(process.env.MUMBAI_URL));

// const wallet = new ethers.Wallet(String(process.env.PTEKEY), provider)
// console.log("wallet",wallet)
// console.log("ChainId", ChainId)
// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const chainId = ChainId.MUMBAI //ChainId.MATIC
const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // must be checksummed
const decimals = 18
const DAI = new Token(chainId, tokenAddress, decimals)

const USDC = new Token(
    ChainId.MUMBAI,
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC
    18
  );
// console.log("WETH",WETH)
// const provider_ = getDefaultProvider(getNetwork(chainId))
// console.log(provider.getNetwork())

// const fetchNetwork = async () =>{
//     const netowrk = await provider.getNetwork()
//     // console.log("DAI",DAI)
//     return netowrk
// }

// const promise3 = Promise.resolve(fetchNetwork());
// promise3.then((value3) => {
//   console.log("value3", value3);
// });
// const fetchDAI = async () =>{
//     const DAI: Token = await Fetcher.fetchTokenData(chainId, tokenAddress,decimals)
//     // console.log("DAI",DAI)
//     return DAI
// }

// const promise2 = Promise.resolve(fetchDAI());
// promise2.then((value2) => {
//   console.log("value2", value2);
// });


// // // note that you may want/need to handle this async code differently,
// // // for example if top-level await is not an option


// console.log("provider",provider)
// console.log("DAI", DAI)
// console.log("WETH[DAI.chainId]", WETH[DAI.chainId])
const fetchPair = async () => {
  const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId],provider)
//   const pair = await Fetcher.fetchPairData(USDC, WETH[USDC.chainId],provider)
//   console.log("pair", pair);
  return pair
}
const promise1 = Promise.resolve(fetchPair());
promise1.then((pair) => {
//   console.log("value", pair);
  const route = new Route([pair], WETH[DAI.chainId])
//   console.log("route",route)
    return route
}).then((route) => {
    const amountIn = '1000000000000000000' // 1 WETH
    const trade = new Trade(route, new TokenAmount(WETH[DAI.chainId], amountIn), TradeType.EXACT_INPUT)
  console.log("trade",trade)

})

// Comment out for now so other functions will run for testing
// const fetchPair = async () => {
//   const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId, provider)
//   console.log("pair", pair);
//   return pair
// }
// const promise1 = Promise.resolve(fetchPair());
// promise1.then((value) => {
//   console.log("value", value);
// });
// const route = new Route([pair], WETH[DAI.chainId])



// const amountIn = '1000000000000000000' // 1 WETH
// const trade = new Trade(route, new TokenAmount(WETH[DAI.chainId], amountIn), TradeType.EXACT_INPUT)

//

// const slippageTolerance = new Percent('50', '10000') // 50 bips, or 0.50%

// const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw // needs to be converted to e.g. hex
// const path = [WETH[DAI.chainId].address, DAI.address]
// const to = '' // should be a checksummed recipient address
// const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time
// const value = trade.inputAmount.raw // // needs to be converted to e.g. hex
