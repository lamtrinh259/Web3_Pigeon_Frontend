


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
        {props.name}
        {props.price}
        <table className="listTicker">

        {/* <td><img className="inline_block" src={props.img} height="50px" ></img></td>  */}
        <td className="inline_block" className="name_size" width="300px"><b>To BUY when {props.conditionToken}</b></td>

        <td className="inline_block" width="300px">is below {props.priceCondition}</td>
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