import React from 'react';
// 1. import `NativeBaseProvider` component
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeBaseProvider,
  Text,
  View,
  Button,
  ButtonGroup,
  Spacer,
  Box,
  Stack,
  Heading,
  Center,
  Image,
} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';

import theme from './theme';

const StackNav = createStackNavigator();

function SpreadOperatorScreen({navigation}) {
  const code = `
function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);
`;
  return (
    <Center flex={1}>
      <Box rounded="pill" backgroundColor="white" shadow={4} w={300}>
        <Stack p={4} space={2}>
          <Heading color="rose.600">Spread Operator</Heading>
          <Text color="blueGray.500">
            Spread operator allows an iterable to expand in places where 0+
            arguments are expected. It is mostly used in the variable array
            where there is more than 1 values are expected. It allows us the
            privilege to obtain a list of parameters from an array. Syntax of
            Spread operator is same as Rest parameter but it works completely
            opposite of it.
          </Text>
          <Box backgroundColor="gray.200" p={1} m={1}>
            {code}
          </Box>
          <ButtonGroup
            variant="ghost"
            mt={4}
            spacing={2}
            colorScheme="rose"
            _text={{fontWeight: 'semibold'}}>
            <Button onPress={() => navigation.navigate('rest')}>
              go to rest
            </Button>
            <Button onPress={() => navigation.navigate('hook')}>
              go to hook
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Center>
  );
}

function RestParametersScreen({navigation}) {
  const code = `
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6
`;
  return (
    <Center flex={1}>
      <Box rounded="pill" backgroundColor="white" shadow={4} w={300}>
        <Stack p={4} space={2}>
          <Heading color="fuchsia.600">Rest Operator</Heading>
          <Text color="blueGray.500">
            The rest parameter syntax allows a function to accept an indefinite
            number of arguments as an array, providing a way to represent
            variadic functions in JavaScript.
          </Text>
          <Box backgroundColor="gray.200" p={1} m={1}>
            {code}
          </Box>
          <ButtonGroup
            variant="ghost"
            mt={4}
            spacing={2}
            colorScheme="fuchsia"
            _text={{fontWeight: 'semibold'}}>
            <Button onPress={() => navigation.navigate('rest')}>
              go to rest
            </Button>
            <Button onPress={() => navigation.navigate('hook')}>
              go to hook
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Center>
  );
}

function UseStateHookScreen({navigation}) {
  const code = `
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
`;
  return (
    <Center flex={1}>
      <Box rounded="pill" backgroundColor="white" shadow={4} w={300}>
        <Stack p={4} space={2}>
          <Heading color="purple.600">useState hook</Heading>
          <Text color="blueGray.500">
            Calling useState hook declares a “state variable”. Our variable is
            called count but we could call it anything else, like banana. This
            is a way to “preserve” some values between the function calls —
            useState is a new way to use the exact same capabilities that
            this.state provides in a class. Normally, variables “disappear” when
            the function exits but state variables are preserved by React.
          </Text>
          <Box backgroundColor="gray.200" p={1} m={1}>
            {code}
          </Box>
          <ButtonGroup
            variant="ghost"
            mt={4}
            spacing={2}
            colorScheme="purple"
            _text={{fontWeight: 'semibold'}}>
            <Button onPress={() => navigation.navigate('rest')}>
              go to rest
            </Button>
            <Button onPress={() => navigation.navigate('hook')}>
              go to hook
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Center>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Stack
        variant="outline"
        mt={4}
        space={3}
        _text={{fontWeight: 'semibold'}}>
        <Button
          variant="outline"
          colorScheme="rose"
          onPress={() => navigation.navigate('spread')}>
          go to spread
        </Button>
        <Button
          variant="outline"
          colorScheme="fuchsia"
          onPress={() => navigation.navigate('rest')}>
          go to rest
        </Button>
        <Button
          variant="outline"
          colorScheme="purple"
          onPress={() => navigation.navigate('hook')}>
          go to hook
        </Button>
      </Stack>
    </View>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StackNav.Navigator initialRouteName="home">
          <StackNav.Screen name="home" component={HomeScreen} />
          <StackNav.Screen
            name="spread"
            component={SpreadOperatorScreen}
            options={{
              headerStyle: {
                backgroundColor: '#db2777',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <StackNav.Screen
            name="rest"
            component={RestParametersScreen}
            options={{
              headerStyle: {
                backgroundColor: '#c026d3',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <StackNav.Screen
            name="hook"
            component={UseStateHookScreen}
            options={{
              headerStyle: {
                backgroundColor: '#9333ea',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </StackNav.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
