// contracts/SimpleCrowdsale.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.5.5;

import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";


/**
 * @title SimpleCrowdsale
 * @dev This is an example of a fully fledged crowdsale.
 */
contract crowdsaleb is Crowdsale {
    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token
    ) public Crowdsale(rate, wallet, token) {
    }

}