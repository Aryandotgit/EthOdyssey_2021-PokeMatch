const PokeToken = artifacts.require('./PokeToken.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Poke Token', (accounts) => {
  let token

  before(async () => {
    token = await PokeToken.deployed()
  })

