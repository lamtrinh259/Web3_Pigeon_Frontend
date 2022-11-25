import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from "react-router-dom";
import { Link,useOutletContext } from "react-router-dom";
import "./Trading.css"

function Trading() {
  // const [account, setAccount] = useState("");
  const [tokenTobuy, setTokenTobuy] = useState("ETH");
  const [depositToken, setDepositToken] = useState("USDC");
  const [depositAmt, setDepositAmt] = useState(null);
  const [isWalletInstalled, setIsWalletInstalled, account, setAccount] = useOutletContext();
  console.log("isWalletInstalled",isWalletInstalled)
  console.log("account",account)
  useEffect(() => {
    console.log(tokenTobuy)
    
  }, [tokenTobuy]);

  // const createSearch = (search) => {
  // 	const url = urlcat(BACKEND, `/api/listings/search`);
  // 	console.log(search);
  // 	fetch(url, {
  // 		method: 'POST',
  // 		headers: {
  // 			'Content-Type': 'application/json',
  // 		},
  // 		body: JSON.stringify(search),
  // 	})
  // 		.then((response) => response.json())
  // 		.then((data) => {
  // 			setListings(data);

  // 			if (data.error) {
  // 				setError(data.error);
  // 			}
  // 		})
  // 		.catch((error) => console.log(error));
  // };
  // const params= [
  //   {
  //     from: '0x67b993D1dCc07b2Fce4b8d07f030477551778205',
  //     to: '0xf2081863a9042ACdBF6D6D90B7b6d1a0a1CCef0D',
  //     gas: '28a0', // 30400
  //     gasPrice: '',//'0x9184e72a000', // 10000000000000
  //     value: 'a1ea',//'277cf2a', // 41406250 //2441406250
  //     data: '' //'0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675'
  //       //'0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
  //   },
  // ];
  async function sendTX(amt){
    window.ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: String(account),
          to: '0xf2081863a9042ACdBF6D6D90B7b6d1a0a1CCef0D',
          value : ethers.utils.parseEther(`${amt}`)._hex //100000000000000decimals
          // gasPrice: '0x09184e72a000',
          // gas: '0x2710',
        },
      ],
    })
    .then((result) => {
      console.log("result",result)
      // The result varies by RPC method.
      // For example, this method will return a transaction hash hexadecimal string on success.
    })
    .catch((error) => {
      // If the request fails, the Promise will reject with an error.
    });

  }
  
  const callSubmitFunction = (event) => {
    event.preventDefault();
    const submitParams = {
      tokenTobuy,
      depositAmt,
      depositToken
    };
    console.log("submitParams", submitParams)

    !account? alert('pls connect wallet') : sendTX(depositAmt) //in matic
    if (submitParams.depositAmt == null){
        alert(`Pls input amount of ${depositToken}`)
    }
    console.log("submitParams.depositAmt",submitParams.depositAmt)
    // createSearch(submitParams);
  };
  return (
    <>
      <div className='container center'>
        <br />

        <div className="container padding">
          <h1>TRADING</h1>
          <h3 style={{ fontSize: 25 }}> Execute advanced trades based on predefined conditions</h3>

          <form className="formdim">
            <label> Which tokens do you want to buy?</label>

            <select
              className="select"
              name='Which_Asset'
              id='Which_Asset'
              value={tokenTobuy}
              onChange={(event) => setTokenTobuy(event.target.value)}
              type='text'
            >
              <option value='ETH'>ETH</option>
              <option value='WBTC'>WBTC</option>
            </select>
            <div>
              <label className="padding"> Using deposit token</label>
              <input
                className="inputDeposit "
                onChange={(event) => setDepositAmt(event.target.value)}
                type='number'
                placeholder='indicate amount'
              />

              <select
                className="select"
                name='Which_deposit_Asset'
                id='Which_deposit_Asset'
                value={depositToken}
                onChange={(event) => setDepositToken(event.target.value)}
                type='text'
              >
                <option value='USDC'>USDC</option>
                <option value='DAI'>DAI</option>
              </select>
            </div>
            <div>

              <div className="" style={{ fontSize: 20 }} > Buy {tokenTobuy} when:
              </div>
              <div style={{ fontSize: 30 }} > Add Condition:</div>
            </div>
            <input
              onClick={callSubmitFunction}
              className='searchunits'
              type='submit'
              value='Submit condition'
            />
          </form>


        {/* <Button onClick={sendTX}> SendTx</Button> */}
        </div>
        <Link className="nav-link" to="/Apps" style={{ textDecoration: 'none' }} className="buttonCSS_2"> Back to Apps</Link>
      </div>


    </>
  );
}

export default Trading;
