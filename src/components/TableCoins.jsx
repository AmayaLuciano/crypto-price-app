import { Table, Tbody, Td, Thead, Tr, Input, Tfoot } from '@chakra-ui/react';
import { useState } from 'react';
import CoinRow from './CoinRow';

const TableCoins = ({ coins }) => {
  const [searchCoin, setSearchCoin] = useState('');
  const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(searchCoin.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchCoin.toLowerCase())
    );
  });

  return (
    <>
      <Input
        // bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgColor={'blackAlpha.300'}
        border={'none'}
        placeholder="Search a coin..."
        onChange={(e) => setSearchCoin(e.target.value)}
        size={'md'}
        w={'60%'}
      />
      <Table bgColor={'blackAlpha.300'} variant={'simple'}>
        <Thead>
          <Tr>
            {titles.map((title) => (
              <Td fontSize={18}>{title}</Td>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {filteredCoins.map((coin, index) => (
            <CoinRow coin={coin} key={index} index={index + 1} />
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default TableCoins;
