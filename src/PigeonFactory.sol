// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;
import "./PigeonVault.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PigeonFactory is Ownable{
    event vaultCreated(address newVault, address creator, address executor);
    uint256 vaultAmount = 0;

    mapping(address => address) public allVaults;

    function createVault() external  {
        PigeonVault newVault = new PigeonVault(msg.sender, owner());
        vaultAmount++;
        emit vaultCreated(address(newVault), msg.sender, address(this));
    }

    function getVault(address user) external view returns(address){
        return allVaults[user];
    }


}
