import { HStack, Tr, Td, Image, Text } from '@chakra-ui/react';
import React from 'react';

const CoinRow = ({ coin, index }) => {
  return (
    <>
      <Tr alignItems={'center'} justifyContent={'space-between'}>
        <Td>{index}</Td>
        <Td>
          <HStack>
            <Image src={coin.image} alt={coin.name} w={'6%'} me={4} />
            <Text>{coin.name}</Text>
            <Text color={'GrayText'} casing={'uppercase'}>
              {coin.symbol}{' '}
            </Text>
          </HStack>
        </Td>
        <Td>${coin.current_price}</Td>
        <Td color={coin.price_change_percentage_24h > 0 ? 'green' : 'red'}>
          {coin.price_change_percentage_24h}%
        </Td>
        <Td isNumeric>${coin.total_volume}</Td>
      </Tr>
    </>
  );
};

export default CoinRow;
