/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      gas: 8600000,
      network_id: '*' // Match any network id
    },
    rinkeby:  {
      network_id: 4,
      host: "localhost",
      port:  8545,
      gas:   3900000,
      gasPrice: 1000000000
    },
    imobile:  {
      network_id: 1337,
      host: "106.120.205.116",
      port:  8645,
      gas:   3900000,
      gasPrice: 1000000000
    }
  }
};
