var PokeToken = artifacts.require("PokeToken");

module.exports = function(deployer) {
  deployer.deploy(PokeToken);
};
