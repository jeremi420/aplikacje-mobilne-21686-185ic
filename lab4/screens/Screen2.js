import React from 'react';
import {ScrollView} from 'react-native';
import {
  Center,
  Text,
  Input,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  PinInput,
  TextArea,
  Stack,
  Typeahead,
  Select,
} from 'native-base';

import Header from './Header';

function Screen2() {
  const [language, setLanguage] = React.useState('');
  return (
    <React.Fragment>
      <Header />
      <ScrollView>
        <Center>
          <Stack space={4} mx={3} mb={8}>
            <Heading>dwa selecty z tą samą wartością</Heading>
            <Select
              selectedValue={language}
              minWidth={200}
              onValueChange={itemValue => setLanguage(itemValue)}>
              <Select.Item label="JavaScript" value="js" />
              <Select.Item label="TypeScript" value="ts" />
              <Select.Item label="C" value="c" />
              <Select.Item label="Python" value="py" />
              <Select.Item label="Java" value="java" />
            </Select>
            <Select
              selectedValue={language}
              minWidth={200}
              onValueChange={itemValue => setLanguage(itemValue)}>
              <Select.Item label="JavaScript" value="js" />
              <Select.Item label="TypeScript" value="ts" />
              <Select.Item label="C" value="c" />
              <Select.Item label="Python" value="py" />
              <Select.Item label="Java" value="java" />
            </Select>
          </Stack>
        </Center>
      </ScrollView>
    </React.Fragment>
  );
}

export default Screen2;
