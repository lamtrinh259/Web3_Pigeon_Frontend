import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from "react-router-dom";
import { Link, useOutletContext } from "react-router-dom";
import "./Trading.css"
import Tradingcondition from "./Tradingcondition";
import abi from './abi'


function Trading() {
  const [tokenTobuy, setTokenTobuy] = useState("USDC");
  const [depositToken, setDepositToken] = useState("MATIC");
  const [depositAmt, setDepositAmt] = useState(null);
  const [conditionToken, setConditionToken] = useState("BTC");
  const [priceCondition, setPriceCondition] = useState(null);
  const [conditionsFinal, setConditionsFinal] = useState([]);

  const [isWalletInstalled, setIsWalletInstalled, account, setAccount] = useOutletContext();
  console.log("isWalletInstalled", isWalletInstalled)
  console.log("account", account)

  const [items, setItems] = useState([]);



  useEffect(() => {
    console.log(tokenTobuy)
    // console.log("abi",abi)
  }, [tokenTobuy]);

////
  const pathAddresses = ["0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889","0xE097d6B3100777DC31B34dC2c58fB524C2e76921"]
  const interfaceVault = new ethers.utils.Interface(abi);
  // const dataOutput = interfaceVault.encodeFunctionData("createRule", [ethers.utils.parseEther(`${depositAmt}`), ethers.utils.parseEther(`${priceCondition}`), true, 0,1,0,0,pathAddresses, 0,0,true ])
  // console.log("dataOutput",dataOutput)
///
  async function sendTX(amt) {

    const dataOutput = interfaceVault.encodeFunctionData("createRule", [[ethers.utils.parseEther(`${depositAmt}`), ethers.utils.parseEther(`${priceCondition}`), true, 0,1,0,0,pathAddresses, 0,0,true ]])
    console.log('dataOutput',dataOutput)

    window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: String(account),
            to: '0x5B5Fbede8A7f6cAb1d3eaB8679106f2d9D3eb2E7', // vault deposit
            value: 0,//ethers.utils.parseEther(`${amt}`)._hex, //100000000000000decimals
            // gasPrice: '0x09184e72a000',
            // gas: '0x2710',
            data: dataOutput
          },
        ],
      })
      .then((result) => {
        console.log("result", result)
        // The result varies by RPC method.
        // For example, this method will return a transaction hash hexadecimal string on success.
      })
      .catch((error) => {
        // If the request fails, the Promise will reject with an error.
      });

  }

  const callSubmitFunction = (event) => {

    // console.log("submitting")
    event.preventDefault();
    const submitParams = {
      tokenTobuy,
      depositAmt,
      depositToken,
      conditionsFinal
    };
    console.log("submitParams", submitParams)
    console.log("conditionsFinal", conditionsFinal)

    !account ? alert('Please Connect Your Wallet') : sendTX(depositAmt) //in matic
    if (submitParams.depositAmt == null) {
      alert(`Please input amount of ${depositToken}`)
    } if (!conditionsFinal.length) { alert(`Please input Conditions`) }
    // console.log("submitParams.depositAmt", submitParams.depositAmt)

  };
  const addConditions = (event) => {
    event.preventDefault();
    // localStorage.setItem('items', JSON.stringify(items));
    // const prev = items
    items.push({ conditionToken: conditionToken, priceCondition: priceCondition })
    console.log("items", items)
    setItems([...items])

  }
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    console.log("localStorage", localStorage)

  }, [items]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
      setConditionsFinal(items)
    }
  }, []);

  console.log("items", items)
  const tickers = items.map((x, index) => (

    <div
      key={index}>
      <div className="listbox" >
        <Tradingcondition
          id={x.id}
          conditionToken={x.conditionToken}
          priceCondition={x.priceCondition}
        // img={x.image}
        // removeTickerClick={removeTickerClick}

        />


      </div>
      <hr width="850px" />



    </div>))
  return (
    <>
      <div className='container center' >
        <br />

        <div className="container padding">
          <h1>TRADING</h1>
          <h3 style={{ fontSize: 25 }}> Execute advanced trades based on predefined conditions</h3>
          <form>
            <div style={{ fontSize: 20 }} > Add Condition:</div>

            <div className="addcondition">

              <label style={{ fontSize: 20 }}  > WHEN </label>
              {/* <label className="padding"> When {conditionToken} </label> */}
              <select
                className="select"
                name='Which_deposit_Asset'
                id='Which_deposit_Asset'
                value={conditionToken}
                onChange={(event) => setConditionToken(event.target.value)}
                type='text'
              >
                <option value='BTC'>BTC</option>
                <option value='ETH'>ETH</option>
              </select>

              <label style={{ padding: 10 }} >   Price Falls below </label>
              <input
                className="inputDeposit "
                onChange={(event) => setPriceCondition(event.target.value)}
                type='number'
                placeholder='indicate amount'
                style={{ marginRight: 10 }}
              />

              <input
                onClick={addConditions}
                className='searchunits'
                type='submit'
                value='Add Condition'


              />
            </div>

          </form>
          <form className="formdim">

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
                <option value='MATIC'>MATIC</option>
                <option value='ETH'>ETH</option>
                <option value='USDC'>USDC</option>
                <option value='DAI'>DAI</option>
              </select>
              <div>
            <label> Which tokens do you want to buy?</label>

            <select
              className="select"
              name='Which_Asset'
              id='Which_Asset'
              value={tokenTobuy}
              onChange={(event) => setTokenTobuy(event.target.value)}
              type='text'
            >
              <option value='WBTC'>WBTC</option>
              <option value='ETH'>ETH</option>
              <option value='USDC'>USDC</option>
            </select>

              
            </div>




          </form>



          {/* <Button onClick={sendTX}> SendTx</Button> */}
        </div>
        <div className="Final_box">
          <div className="buyCondition" style={{ fontSize: 30 }} >I want to BUY {tokenTobuy} -
          </div>
          {tickers}
          <form>
            <input
              onClick={callSubmitFunction}
              className='searchunits'
              type='submit'
              value='Submit Deposit Tokens and Set Trigger Conditions'
            />
          </form>
        </div>
        <Link className="nav-link" to="/Apps" style={{ textDecoration: 'none' }} className="buttonCSS_2"> Back to Apps</Link>
      </div>


    </>
  );
}

export default Trading;
