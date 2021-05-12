/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import {
  NativeBaseProvider,
  Text,
  // View,
  List,
  Box,
  Stack,
  Center,
  Button,
} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Screen1() {
  const data = Array.from({length: 100}, (v, i) => ({
    key: i,
    value: Math.floor(Math.random() * 1000),
  }));
  const renderItem = item => {
    return (
      <List.Item
        bg="emerald.400"
        borderRadius="md"
        justifyContent="center"
        _text={{fontSize: '2xl'}}
        width={150}
        px={4}
        py={2}
        my={2}
        key={item.key}>
        {item.value.toString()}
      </List.Item>
    );
  };
  return (
    <React.Fragment>
      <ScrollView
        style={{
          flex: 1,
          alignContent: 'flex-end',
          flexWrap: 'wrap',
          marginTop: 8,
          backgroundColor: 'aliceblue',
        }}>
        {data.map(item => renderItem(item))}
      </ScrollView>
    </React.Fragment>
  );
}

function Screen2() {
  const data = Array.from({length: 100}, (v, i) => ({
    key: i,
    value: Math.floor(Math.random() * 1000),
  }));
  const renderItem = item => {
    return (
      <List.Item
        bg="emerald.400"
        borderRadius="md"
        justifyContent="center"
        _text={{fontSize: '2xl'}}
        width={150}
        px={4}
        py={2}
        my={2}
        key={item.key}>
        {item.value.toString()}
      </List.Item>
    );
  };
  return (
    <React.Fragment>
      <ScrollView
        style={{
          flex: 1,
          alignContent: 'flex-start',
          flexWrap: 'wrap',
          marginTop: 8,
          backgroundColor: 'aliceblue',
        }}>
        {data.map(item => renderItem(item))}
      </ScrollView>
    </React.Fragment>
  );
}

function Screen3() {
  const handlePress = () => {
    Alert.alert('nacisnieto');
  };
  return (
    <React.Fragment>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Stack space={3}>
          <TouchableHighlight onPress={handlePress} style={{borderRadius: 10}}>
            <Box
              style={{overflow: 'hidden'}}
              p={5}
              borderRadius={10}
              backgroundColor="red.700">
              <Text style={{color: 'white'}} fontSize="lg" bold>
                highlight
              </Text>
            </Box>
          </TouchableHighlight>
          <TouchableOpacity activeOpacity={0.6} onPress={handlePress}>
            <Box
              style={{overflow: 'hidden'}}
              p={5}
              borderRadius={10}
              backgroundColor="blue.700">
              <Text style={{color: 'white'}} fontSize="lg" bold>
                opacity
              </Text>
            </Box>
          </TouchableOpacity>
        </Stack>
      </View>
    </React.Fragment>
  );
}

function Screen4() {
  const [color, setColor] = React.useState(null);
  const swipeable = React.useRef(null);
  const handleIconPress = color => () => {
    setColor(color);
    swipeable.current.recenter();
  };
  const rightButtons = [
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleIconPress('blue.700')}
      style={{height: '100%'}}>
      <Box
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingLeft: 20,
          backgroundColor: 'blue',
        }}>
        <Icon name="tint" color="white" size={26} />
      </Box>
    </TouchableOpacity>,
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleIconPress('green.700')}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: 'green',
      }}>
      <Icon name="tint" color="white" size={26} />
    </TouchableOpacity>,
  ];
  return (
    <React.Fragment>
      <Center>
        <Swipeable
          rightButtons={rightButtons}
          onRef={ref => {
            swipeable.current = ref;
          }}>
          <Box p={3} w="100%" backgroundColor={color ? color : 'white'}>
            <Text color={color ? 'white' : 'black'} fontSize="lg">
              example
            </Text>
          </Box>
        </Swipeable>
      </Center>
    </React.Fragment>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Screen4 />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
