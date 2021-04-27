import React from 'react';
import {FlatList} from 'react-native';
import {
  Text,
  List,
  Stack,
  Radio,
  NativeBaseProvider,
  Center,
  HStack,
} from 'native-base';

import Header from './Header';

const data = Array.from({length: 100}, (v, i) => ({
  key: i,
  value: Math.floor(Math.random() * 1000),
}));

export default function Screen1() {
  const [filter, setFilter] = React.useState('1');
  const [orderBy, setOrderBy] = React.useState('1');
  const handleFilterChange = value => {
    setFilter(value);
  };
  const handleOrderChange = value => {
    setOrderBy(value);
  };
  const renderItem = ({item}) => {
    return (
      <List.Item
        bg="emerald.400"
        borderRadius="md"
        justifyContent="center"
        _text={{fontSize: '2xl'}}
        px={4}
        py={2}
        my={2}>
        {item.value.toString()}
      </List.Item>
    );
  };
  const filteredData = data.filter(item => {
    if (filter === '1') return true;
    if (filter === '2') return item.value > 500;
    if (filter === '3') return item.value < 300;
  });
  const sortedData = filteredData.sort((a, b) =>
    orderBy === '1' ? a.value - b.value : b.value - a.value,
  );
  return (
    <React.Fragment>
      <Header />
      <Text>Screen1</Text>
      <HStack justifyContent="space-between">
        <Radio.Group value={filter} onChange={handleFilterChange} m={4}>
          <Text>filtrowanie</Text>
          <Stack space={2} alignItems="flex-start">
            <Radio value="1">
              <Text mx={2}>brak filtra</Text>
            </Radio>
            <Radio value="2">
              <Text mx={2}>większe od 500</Text>
            </Radio>
            <Radio value="3">
              <Text mx={2}>mniejsze od 300</Text>
            </Radio>
          </Stack>
        </Radio.Group>
        <Radio.Group value={orderBy} onChange={handleOrderChange} m={4} mr={8}>
          <Text>sortowanie</Text>
          <Stack space={2} alignItems="flex-start">
            <Radio value="1">
              <Text mx={2}>rosnąco</Text>
            </Radio>
            <Radio value="2">
              <Text mx={2}>malejąco</Text>
            </Radio>
          </Stack>
        </Radio.Group>
      </HStack>
      <FlatList
        data={sortedData}
        keyExtractor={item => item.key}
        renderItem={renderItem}
      />
    </React.Fragment>
  );
}
