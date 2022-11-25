import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import "./Appconnect.css";
import { useNavigate } from "react-router-dom";




function App() {
  const [account, setAccount] = useState("");


  const navigate = useNavigate();
  const launchApp = () => {
    navigate(`/Apps`);
  }


  return (
    <>
      <div className='container center backgroundimg' >
        <br />
            <Button onClick={launchApp}>Launch App</Button>

        <div className="container padding">
          <h1>Web 3 Pigeon</h1>
          <h2>Automate your Web3 Actions effortlessly</h2>
          <p>-</p>
        </div>

      </div>

    </>
  );
}

export default App;
