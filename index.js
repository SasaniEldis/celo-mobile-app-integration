const { getBalance } = require('./CeloClient');

const fetchBalance = async () => {
  const celoBalance = await getBalance(0x2c847911D933EB932947B98f8B602a3A45Be793A);
  console.log('Your Celo Balance:', celoBalance);
};

fetchBalance();
