/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Stack,
  Radio,
  Text,
  NativeBaseProvider,
  Center,
  HStack,
  Heading,
  Box,
} from 'native-base';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="screen1">
          <Drawer.Screen name="screen1" component={Screen1} />
          <Drawer.Screen name="screen2" component={Screen2} />
          <Drawer.Screen name="screen3" component={Screen3} />
          <Drawer.Screen name="screen4" component={Screen4} />
          <Drawer.Screen name="screen5" component={Screen5} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
