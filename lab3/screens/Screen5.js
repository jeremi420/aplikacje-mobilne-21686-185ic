import React from 'react';
import {FlatList} from 'react-native';
import {Text, List, Spinner} from 'native-base';

import Header from './Header';

export default function Screen5() {
  const [data, setData] = React.useState(
    Array.from({length: 100}, (v, i) => ({
      key: i,
      value: Math.floor(Math.random() * 1000),
    })),
  );
  const [loading, setLoading] = React.useState(false);
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
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
      <Text>Screen5</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        onEndReached={handleEndReached}
        ListFooterComponent={loading && <Spinner color="green.500" />}
      />
    </React.Fragment>
  );
}
