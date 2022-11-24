// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

import "@openzeppelin/contracts/access/Ownable.sol";



contract PigeonVault is ERC721Holder, ERC1155Holder, Ownable{
    event Withdraw(uint256 amount, address token, uint256 tokenID, bool isERC20);
    event DepositedETH(uint256 amount);
    address executer;

    address WETH = address(0);
    Rule[] rules;
    uint256 numOfRules = 0;
    struct Rule{
        uint256 amount;
        uint256 excTime;
        uint256 maxExecution;
        uint256 currentExecution;
        uint256 timeinterval;
        address[2] pathOrTokenAndReceipient;  
        Exchange exchange;
        Action action;
        bool active;
    }
    enum Action {
        exchange,
        payment
    }
    enum Exchange{
        Quickswap
    }
    event RuleCreated(uint256 ruleID);
    event RuleDeleted(uint256 ruleID);
    event RuleExecuted(uint256 ruleID, uint256 currentExection, address executer);
    modifier onlyExecuterOrOwner{
        require(msg.sender == executer /*|| isOwner(msg.sender)*/, "not allowed");
        _;
    }
/*
    function getAllActiveRules() external view returns(Rule[] memory){
        Rule[] memory activeRules = new Rule[](numOfRules);
        uint256 activeRulesIndex = 0;
        for(uint256 i=0; i<numOfRules; i++){
            if(rules[i].active == true && rules[i].currentExecution < rules[i].maxExecution){
                activeRules[activeRulesIndex] = rules[i];
                activeRulesIndex++;
            }
        }
    
        return activeRules;
    }

 */   
   
    constructor (address vaultOwner, address _executer){
        transferOwnership(vaultOwner);
        executer = _executer;
    }

    function createRule(Rule memory rule) external payable onlyOwner{
        rules.push(rule);
        numOfRules++;
        emit RuleCreated(numOfRules--);
    }

    function deleteRule(uint256 ruleID) external onlyOwner{
        rules[ruleID].active = false;
        emit RuleDeleted(ruleID);
    }


    function execRule(
        uint256 ruleID
    ) public payable onlyExecuterOrOwner {
       require(rules[ruleID].active == true, "Rule not active!");
        require(rules[ruleID].excTime==0 || rules[ruleID].excTime < block.timestamp, "not yet");
        require (rules[ruleID].currentExecution < rules[ruleID].maxExecution, "maxExec reached");
        rules[ruleID].currentExecution++;
        if(rules[ruleID].timeinterval > 0){
            rules[ruleID].excTime += rules[ruleID].timeinterval;
        }

        //Buy & Sell
        if(rules[ruleID].action == Action.payment){
            if(rules[ruleID].pathOrTokenAndReceipient[0] == address(0)){
                (bool status, bytes memory retMsg) = address(owner()).call{value: rules[ruleID].amount}("");
                require(status, string(retMsg));
            } else {
                IERC20(rules[ruleID].pathOrTokenAndReceipient[1]).transfer(owner(), rules[ruleID].amount);

            }
        } else {
            //Quickswap trade
        }

       emit RuleExecuted(ruleID, rules[ruleID].currentExecution, msg.sender);

    }

    function withdrawToken(address tokenAddress, uint256 amount, uint256 tokenID,  bool isERC20) external onlyOwner {
        if(isERC20){
            IERC20(tokenAddress).transfer(owner(), amount);
        } else {
            IERC721(tokenAddress).safeTransferFrom(address(this), owner(), tokenID, "");
        }
        emit Withdraw(amount, tokenAddress, tokenID, isERC20); 
    }

    function withdrawETH(uint256 amount) external onlyOwner{
       (bool status, bytes memory retMsg) = payable(address(owner())).call{value:amount}("");
        require(status, string(retMsg));
        emit Withdraw(amount, address(0), 0, false); 
    }



    receive() external payable {
       emit DepositedETH(msg.value);
    }

}
