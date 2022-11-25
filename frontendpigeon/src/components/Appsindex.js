
import "./Appconnect.css";
import AppsCard from "./AppsCard"
import { useNavigate } from "react-router-dom";
import games from "./../assets/GAMES.png"
import Airdrop from "./../assets/AIRDROP.png"
import Trading from "./../assets/TRADING.png"
import DAO_Ops from "./../assets/DAOOPS.png"
import Payment from "./../assets/PAYMENT.png"
import Custom from "./../assets/CUSTOM.png"
import GMimage from "./../assets/GM.png"


function Appsindex() {

  return (
    <>
      <div className='container center' style={{ backgroundColor: '#000312' }}>
        <img src={GMimage} alt="" height="50px" className='inline_block' style={{ marginTop: 10 } }></img>
        <div className="container padding" >
          <h3 style={{color: "white"}}>Pick an action from the below list to begin automation!</h3>
          {/* <img src={img} alt="" /> */}
          <AppsCard Title="Games" navigate="Games" img={games} subtitle="Collect in-game tokens/rewards at fixed intervals"/>
          <AppsCard Title="Airdrop" navigate="Airdrop" img={Airdrop} subtitle="Automate sending rewards tokens to wallets" />
          <AppsCard Title="Trading" navigate="Trading" img={Trading} subtitle="Execute advanced trades based on predefined conditions"/>
          <AppsCard Title="DAO Ops" navigate="DAO_Ops" img={DAO_Ops} subtitle="Collect in-game tokens/rewards at fixed intervals"/>
          <AppsCard Title="Payment" navigate="Payment" img={Payment} subtitle="Schedule and send recurring payment"/>
          <AppsCard Title="Custom" navigate="Custom" img={Custom} subtitle="Define, set and automate your own actions!"/>
        </div>

      </div>

    </>
  );
}

export default Appsindex;
