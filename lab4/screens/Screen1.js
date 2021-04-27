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
} from 'native-base';

import Header from './Header';

const animals = [
  {id: 1, value: 'Aardvark'},
  {id: 2, value: 'Kangaroo'},
  {id: 3, value: 'Snake'},
  {id: 4, value: 'Pikachu'},
  {id: 5, value: 'Tiger'},
  {id: 6, value: 'Godzilla'},
];

function Screen1() {
  const [text, setText] = React.useState('');
  const handleChangeText = text => {
    setText(text);
  };
  const [filterText, setFilterText] = React.useState('');

  const filteredItems = React.useMemo(() => {
    return animals.filter(
      item => item.value.toLowerCase().indexOf(filterText.toLowerCase()) > -1,
    );
  }, [filterText]);
  return (
    <React.Fragment>
      <Header />
      <ScrollView>
        <Stack space={4} mx={3} mb={8}>
          <Heading mb={3}>domyślne pole tekstowe</Heading>
          <Input p={3} w="90%" placeholder="Default Input Box" />
        </Stack>
        <Stack space={4} mx={3} mb={8}>
          <Heading mb={3}>kontrolowane pole tekstowe</Heading>
          <Input
            p={3}
            w="90%"
            placeholder="Default Input Box"
            value={text}
            onChangeText={handleChangeText}
          />
          <Text fontSize="md">{`wpisano: ${text}`}</Text>
        </Stack>
        <Stack space={4} mx={3} mb={8}>
          <Heading mb={3}>pole tekstowe dla pinu</Heading>
          <PinInput inputSize="md" value="32" defaultValue="98">
            <PinInput.Field />
            <PinInput.Field />
            <PinInput.Field />
            <PinInput.Field />
          </PinInput>
        </Stack>
        <Stack space={4} mx={3} mb={8}>
          <Heading>wsprarcie dla wielu linii</Heading>
          <TextArea h={24} placeholder="Type here" />
        </Stack>
        <Stack space={4} mx={3} mb={20}>
          <Heading>autocomplete</Heading>
          <Typeahead
            options={filteredItems}
            onChange={setFilterText}
            onSelectedItemChange={value => console.log('Selected Item ', value)}
            getOptionKey={item => item.id}
            getOptionLabel={item => item.value}
            label="Select your favorite animal"
          />
        </Stack>
      </ScrollView>
    </React.Fragment>
  );
}

export default Screen1;
