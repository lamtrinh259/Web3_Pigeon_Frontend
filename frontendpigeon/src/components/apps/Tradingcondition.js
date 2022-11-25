


function Tradingcondition(props){

        // function colorChange (){
        //     if(props.percentchange < 0){
        //     return '#f77d6d'    //red
        // }else return '#1db512' //green
        // }

        // function tickerColor (){
        //     if(props.percentchange < 0){
        //     return 'red'    //red
        // }else return 'green' //green
        // }
    
    return(
    
        <>
        <table className="listTicker">

        {/* <td><img className="inline_block" src={props.img} height="50px" ></img></td>  */}
        <td className=" ticker_size"> when <b>{props.conditionToken}</b> is below <b>${props.priceCondition}</b></td>
        {/* <td className="inline_block" style={{color: tickerColor()}} width="100px">{props.percentchange.toFixed(2)}%</td> */}
        {/* <td className="inline_block" >
            <WatchListChart 
            id={props.id} 
            name={props.name} 
            /></td> */}
       
       {/* <button onClick={()=> props.removeTickerClick(props.name)} className="button-45" role="button" style={{fontSize : 12}}> Delete </button> */}

        </table>
       </>
    )
}

export default Tradingcondition