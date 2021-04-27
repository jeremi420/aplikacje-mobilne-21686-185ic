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
  Switch,
  Modal,
  Button,
} from 'native-base';

import Header from './Header';

function Screen2() {
  const [open, setOpen] = React.useState('');
  const handleToggle = () => {
    setOpen(open => !open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Header />
      <Modal isOpen={open} onClose={setOpen} overlayVisible={true}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header _text={{fontSize: '4xl', fontWeight: 'bold'}}>
            {Math.floor(Math.random() * 10).toString()}
          </Modal.Header>
          <Modal.Footer>
            <Button colorScheme="blue" mr={1} onPress={handleClose}>
              Done
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <ScrollView>
        <Center flex={1}>
          <Heading mt={100}>wlacz modal</Heading>
          <Switch size="lg" isChecked={open} onToggle={handleToggle} />
        </Center>
      </ScrollView>
    </React.Fragment>
  );
}

export default Screen2;
