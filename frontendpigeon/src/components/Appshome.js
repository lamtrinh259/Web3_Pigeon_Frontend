import './Appshome.css';
import React, { useEffect, useState, createContext } from "react";
import { Contract, ethers } from "ethers";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GMimage from "./../assets/GM.png"


function Appshome() {
  const [account, setAccount] = useState("");
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);


  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
      //   setCurrentNetwork(window.ethereum.networkVersion);
    }
  }, []);

  const navigate = useNavigate();
  async function connectWallet() {
    window.ethereum.request({ method: "eth_requestAccounts", })
      .then((accounts) => {
        setAccount(accounts)
        console.log("account", accounts)
        console.log("isWalletInstalled", isWalletInstalled)

      })
      .catch((error) => { alert("Something went wrong") });
  }


  return (
    <>
      <div className='home_top'>
        <nav
          style={{
            // borderTop: "solid 1px",
            // borderBottom: "solid 1px",
            // paddingBottom: "1rem",
          }}
        >
          {/* <img src={image} alt="" height="100px" className='inline_block' style={{ marginTop: 10 } }></img> */}
          {/* <div className='margin_button'> */}
          <div>
            <Link to="/" className="buttonCSS " style={{ textDecoration: 'none' }} > Home </Link> {" "}
          </div>
          </nav>
          {/* <nav>
          <Link to="watchlist" className="buttonCSS" style={{ textDecoration: 'none' }}>Watchlist</Link>
          </nav> */}
          {/* </div> */}

        <div className='inline_block pixel_font' style={{ fontSize: 40 }}>Web3 Pigeon</div>




        {isWalletInstalled && !account ?
          (<Button onClick={connectWallet}>Connect Wallet</Button>) :
          (!account ? (<p>Install MetaMask</p>) :
            <> <p>Your current account is:</p>
              <Badge pill bg="light" text="dark">
                {account}
              </Badge>{' '}</>
          )}
      </div>

      <Outlet context={[isWalletInstalled, setIsWalletInstalled ,account ,setAccount ]}/>

    </>
  );
}

export default Appshome;
