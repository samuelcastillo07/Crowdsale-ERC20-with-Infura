// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const bradia = artifacts.require("sam");
const crowdsaleb = artifacts.require("crowdsaleb");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(bradia, 'Sam Token', 'SAM', '150000000000000000000000000'); //  About token
  const token = await bradia.deployed();
  
  await deployer.deploy(crowdsaleb, 33500, accounts[0], token.address);
  const crowdsale = await crowdsaleb.deployed();

  token.transfer(crowdsale.address, await token.totalSupply()) //transfer tokens a smart contract
};