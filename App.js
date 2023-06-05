import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getBalance } from './CeloClient';

const App = () => {
  const [balance, setBalance] = useState(null);

  const fetchBalance = async () => {
    const celoBalance = await getBalance('0xYourCeloAddress');
    setBalance(celoBalance);
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <View>
      <Text>Your Celo Balance: {balance}</Text>
      <Button title="Refresh" onPress={fetchBalance} />
    </View>
  );
};

export default App;
