const FloofyRouter = artifacts.require("PancakeRouter");

const { config } = require('./migration-config');

module.exports = function (deployer, network, accounts) {
  //constructor(address _factory, address _WETH) public {
  deployer.deploy(FloofyRouter, config[network].factoryAddress, config[network].WBNBAddress);
};