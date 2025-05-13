
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GASXToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("GasX", "GASX") {
        _mint(msg.sender, initialSupply);
    }

    // Optional: Add any extra methods (e.g., for staking or burning) here if needed
}
