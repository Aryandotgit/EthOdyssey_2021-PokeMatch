// eslint-disable-next-line no-undef
var PokeToken = artifacts.require("PokeToken");

module.exports = function(deployer) {
  deployer.deploy(PokeToken);
};
