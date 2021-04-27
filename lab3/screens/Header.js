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

export default function Header() {
  const navigation = useNavigation();
  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <HStack space={3} alignItems="center" color="red.400">
      <Box p={1}>
        <Icon.Button
          name="bars"
          size={26}
          onPress={handleMenuPress}
          backgroundColor="rgba(0, 0, 0, 0)"
          color="black"
          iconStyle={{marginRight: 5}}
        />
      </Box>
      <Heading>tytuł</Heading>
    </HStack>
  );
}
