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
  useToast,
  Alert,
  Collapse,
  Box,
} from 'native-base';

import Header from './Header';

function Screen5() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(false);
  const handlePress = () => {
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
      setToastOpen(true);
      setTimeout(() => {
        setToastOpen(false);
      }, 5000);
    }, 5000);
  };
  return (
    <React.Fragment>
      <Header />
      <Modal isOpen={modalOpen} onClose={setModalOpen} overlayVisible={true}>
        <Modal.Content>
          <Modal.Header _text={{fontWeight: 'bold'}}>
            po 5 sekundach zamknie się okno oraz pojawi się powiadomienie
          </Modal.Header>
        </Modal.Content>
      </Modal>
      <Center flex={1}>
        <Heading mt={100}>wlacz modal</Heading>
        <Button onPress={handlePress}>open modal</Button>
        <Box style={{flexGrow: 1}} />
        <Collapse isOpen={toastOpen}>
          <Alert status="success">
            <Alert.Title>Success</Alert.Title>
            <Alert.Description>description goes here</Alert.Description>
          </Alert>
        </Collapse>
      </Center>
    </React.Fragment>
  );
}

export default Screen5;
