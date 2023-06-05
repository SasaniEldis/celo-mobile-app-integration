const express = require('express');
const { getBalance } = require('./CeloClient');

const app = express();

app.get('/balance', async (req, res) => {
  const celoBalance = await getBalance('OxYourCeloAddress');
  res.send(`Your Celo Balance: ${celoBalance}`);
});

app.listen(3000, () => console.log('Server started on port 3000'));
