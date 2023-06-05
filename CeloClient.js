const Web3 = require('web3');
const { newKit } = require('@celo/contractkit');

const kit = newKit('https://alfajores-forno.celo-testnet.org');

const getBalance = async (address) => {
  const web3 = new Web3(kit.web3.currentProvider);
  const balance = await web3.eth.getBalance(address);
  return balance;
};

module.exports = {
  getBalance
};
