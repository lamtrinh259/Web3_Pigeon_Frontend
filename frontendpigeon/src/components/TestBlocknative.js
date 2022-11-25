// import React from 'react'
// import { init, useConnectWallet } from '@web3-onboard/react'
// import injectedModule from '@web3-onboard/injected-wallets'
// import { ethers } from 'ethers'

// // Sign up to get your free API key at https://explorer.blocknative.com/?signup=true
// const dappId = '1730eff0-9d50-4382-a3fe-89f0d34a2070'

// const injected = injectedModule()
// console.log('injected',injected)
// // const infuraKey = '<INFURA_KEY>'
// // const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`
// const rpcUrl = `https://mainnet.infura.io/v3/7a5bf0f5f6dd41669827d654f85e80d2`

// // initialize Onboard
// init({
//   wallets: [injected],
//   chains: [
//     {
//       id: '0x1',
//       token: 'ETH',
//       label: 'Ethereum Mainnet',
//       rpcUrl
//     }
//   ]
// })

// function TestBlocknative() {
//   const [{ wallet}]= useConnectWallet()
//     // , connect, disconnect] = useConnectWallet()

// //   // create an ethers provider
// //   let ethersProvider

// //   console.log("wallet",wallet)
// //   if (wallet) {
// //     ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
// //   }

//   return (
//     <div>
//       {/* <button disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())}>
//         {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
//       </button> */}
//     </div>
//   )
// }

// export default TestBlocknative;