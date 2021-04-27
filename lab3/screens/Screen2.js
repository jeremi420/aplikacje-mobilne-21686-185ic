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

// const data = Array.from({length: 100}, (v, i) => ({
//   key: i,
//   value: Math.floor(Math.random() * 1000),
// }));

export default function Screen2() {
  const [data, setData] = React.useState(
    Array.from({length: 100}, (v, i) => ({
      key: i,
      value: Math.floor(Math.random() * 1000),
    })),
  );
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
        {`index: ${item.key} value: ${item.value}`}
      </List.Item>
    );
  };
  const handleEndReached = () => {
    setTimeout(() => {
      setData(data =>
        data.concat(
          Array.from({length: 10}, (v, i) => ({
            key: data.length + i,
            value: Math.floor(Math.random() * 1000),
          })),
        ),
      );
    }, 1000);
  };
  return (
    <React.Fragment>
      <Header />
      <Text>Screen2</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        onEndReached={handleEndReached}
      />
    </React.Fragment>
  );
}
