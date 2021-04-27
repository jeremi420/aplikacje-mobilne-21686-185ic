import React from 'react';
// 1. import `NativeBaseProvider` component
import {NativeBaseProvider, Text, View, Radio, Stack, Icon} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';

const Drawer = createDrawerNavigator();

export default function App() {
  // 2. Use at the root of your app
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
}
