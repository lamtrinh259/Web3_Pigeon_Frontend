
import "./Appconnect.css";
import AppsCard from "./AppsCard"
import { useNavigate } from "react-router-dom";


function Appsindex() {

  return (
    <>
      <div className='container center'>

        <div className="container padding">
          <h2>GM!</h2>
          <h3>Pick an action from the below list to begin automation!</h3>
          <AppsCard Title="Games" navigate="Games"/>
          <AppsCard Title="Airdrop" navigate="Airdrop" />
          <AppsCard Title="Trading" navigate="Trading" />
          <AppsCard Title="DAO Ops" navigate="DAO_Ops"/>
          <AppsCard Title="Payment" navigate="Payment"/>
          <AppsCard Title="Custom" navigate="Custom"/>
        </div>

      </div>

    </>
  );
}

export default Appsindex;
