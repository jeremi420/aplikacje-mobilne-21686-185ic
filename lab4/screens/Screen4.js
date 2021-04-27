import React from 'react';
import {ScrollView, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
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
  Switch,
  Modal,
  Button,
} from 'native-base';

import Header from './Header';

function Screen4() {
  const [open, setOpen] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const handleToggle = () => {
    setOpen(open => !open);
  };
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setOpen(Platform.OS === 'ios');
    setDate(currentDate);
  };
  return (
    <React.Fragment>
      <Header />
      {open && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}

      <ScrollView>
        <Center flex={1}>
          <Heading mt={100}>wlacz modal</Heading>
          <Switch size="lg" isChecked={open} onToggle={handleToggle} />
          <Text>{`wybrano: ${date.toLocaleDateString('pl-PL')}`}</Text>
        </Center>
      </ScrollView>
    </React.Fragment>
  );
}

export default Screen4;
