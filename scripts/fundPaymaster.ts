
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../GASXToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IEntryPoint {
    function handleOps(
        address[] calldata senders,
        bytes[] calldata ops,
        uint256[] calldata gasLimits
    ) external returns (bool[] memory);
}

contract GASXPaymaster is Ownable {
    GASXToken public gasXToken;
    IEntryPoint public entryPoint;

    constructor(GASXToken _gasXToken, IEntryPoint _entryPoint) {
        gasXToken = _gasXToken;
        entryPoint = _entryPoint;
    }

    // Function to pay for gas in GASX tokens
    function payGasForUser(address user, uint256 amount) external onlyOwner {
        require(gasXToken.transferFrom(user, address(this), amount), "Transfer failed");
    }

    // This contract can manage the operations in terms of gas payments
}
