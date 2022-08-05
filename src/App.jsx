import {
  Button,
  Container,
  HStack,
  Text,
  useColorMode,
  VStack,
  Box,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import TableCoins from './components/TableCoins';

function App() {
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    const res = await Axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
    );
    setCoins(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4} justifyContent={'space-betweenbon'}>
      {colorMode == 'light' ? (
        <MoonIcon
          w={6}
          h={6}
          mb={'-40px'}
          mr={4}
          alignSelf={'flex-end'}
          onClick={toggleColorMode}
          cursor={'pointer'}
        />
      ) : (
        <SunIcon
          w={6}
          h={6}
          mb={'-40px'}
          mr={4}
          alignSelf={'flex-end'}
          onClick={toggleColorMode}
          cursor={'pointer'}
        />
      )}

      <Text
        fontSize={30}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip={'text'}
        fontWeight={'extrabold'}
      >
        Crypto Price App
      </Text>

      <TableCoins coins={coins} />

      <Text paddingTop={4} alignSelf={'flex-start'}>
        @2022 Developed by Luciano Amaya
      </Text>
    </VStack>
  );
}

export default App;
