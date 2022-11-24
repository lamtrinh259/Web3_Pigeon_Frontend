"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import qs from 'quickswap-sdk'
// console.log("qs",qs)
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const quickswap_sdk_1 = require("quickswap-sdk");
const ethers_1 = require("ethers");
console.log("PTEKEY", String(process.env.PTEKEY));
console.log(String(process.env.MUMBAI_URL));
const provider = new ethers_1.ethers.providers.JsonRpcProvider(String(process.env.MUMBAI_URL));
// const wallet = new ethers.Wallet(String(process.env.PTEKEY), provider)
// console.log("wallet",wallet)
// console.log("ChainId", ChainId)
// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const chainId = quickswap_sdk_1.ChainId.MUMBAI; //ChainId.MATIC
const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // must be checksummed
const decimals = 18;
const DAI = new quickswap_sdk_1.Token(chainId, tokenAddress, decimals);
const USDC = new quickswap_sdk_1.Token(quickswap_sdk_1.ChainId.MUMBAI, "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC
18);
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
const fetchPair = () => __awaiter(void 0, void 0, void 0, function* () {
    const pair = yield quickswap_sdk_1.Fetcher.fetchPairData(DAI, quickswap_sdk_1.WETH[DAI.chainId], provider);
    //   const pair = await Fetcher.fetchPairData(USDC, WETH[USDC.chainId],provider)
    //   console.log("pair", pair);
    return pair;
});
const promise1 = Promise.resolve(fetchPair());
promise1.then((pair) => {
    //   console.log("value", pair);
    const route = new quickswap_sdk_1.Route([pair], quickswap_sdk_1.WETH[DAI.chainId]);
    //   console.log("route",route)
    return route;
}).then((route) => {
    const amountIn = '1000000000000000000'; // 1 WETH
    const trade = new quickswap_sdk_1.Trade(route, new quickswap_sdk_1.TokenAmount(quickswap_sdk_1.WETH[DAI.chainId], amountIn), quickswap_sdk_1.TradeType.EXACT_INPUT);
    console.log("trade", trade);
});
// const amountIn = '1000000000000000000' // 1 WETH
// const trade = new Trade(route, new TokenAmount(WETH[DAI.chainId], amountIn), TradeType.EXACT_INPUT)
//
// const slippageTolerance = new Percent('50', '10000') // 50 bips, or 0.50%
// const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw // needs to be converted to e.g. hex
// const path = [WETH[DAI.chainId].address, DAI.address]
// const to = '' // should be a checksummed recipient address
// const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time
// const value = trade.inputAmount.raw // // needs to be converted to e.g. hex
