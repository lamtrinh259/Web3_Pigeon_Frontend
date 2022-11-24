import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "./Trading.css"

function Trading() {
  const [account, setAccount] = useState("");
  const [tokenTobuy, setTokenTobuy] = useState("ETH");
  const [depositToken, setDepositToken] = useState("USDC");
  const [depositAmt, setDepositAmt] = useState("USDC");

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

  const callSubmitFunction = (event) => {
    event.preventDefault();
    const submitParams = {
      tokenTobuy,
      depositAmt,
      depositToken
    };
    console.log("submitParams", submitParams)
    // createSearch(submitParams);
    alert('submit created');
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



        </div>
        <Link className="nav-link" to="/Apps" style={{ textDecoration: 'none' }} className="buttonCSS_2"> Back to Apps</Link>
      </div>


    </>
  );
}

export default Trading;
