/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button, ThemeProvider, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Alert,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 2,
  },
  button: {
    flex: 1,
    margin: 5,
  },
  zero: {
    flexGrow: 3,
    margin: 5,
  },
});

const operations = ['plus', 'minus', 'times', 'divide'];

const App = () => {
  const [input, setInput] = React.useState('');
  const [mode, setMode] = React.useState(null);
  const [value, setValue] = React.useState(null);
  const handleDidgitPress = i => () => {
    setInput(input => input.concat(i));
  };
  const handleOperationPress = operation => () => {
    setValue(parseInt(input));
    setInput('');
    setMode(operation);
  };
  const handleEqualsPress = () => {
    if (mode == null) return;
    else if (mode == 'times') {
      setInput(input => (value * parseInt(input)).toString());
    } else if (mode == 'plus') {
      setInput(input => (value + parseInt(input)).toString());
    } else if (mode == 'minus') {
      setInput(input => (value - parseInt(input)).toString());
    } else if (mode == 'divide') {
      setInput(input => (value / parseInt(input)).toString());
    }
    setValue(null);
    setMode(null);
  };
  const handleClearPress = () => {
    setInput('');
    setValue(null);
    setMode(null);
  };
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <View style={styles.root}>
          <Input placeholder="0" value={input} disabled />
          <View style={styles.row}>
            <View style={styles.zero}>
              <Button
                onPress={handleEqualsPress}
                icon={<Icon name="equals" size={22} color="white" />}
              />
            </View>
            <View style={styles.button}>
              <Button title="C" onPress={handleClearPress} />
            </View>
          </View>
          <View style={styles.row}>
            {[1, 2, 3].map(i => (
              <View style={styles.button}>
                <Button title={i} onPress={handleDidgitPress(i.toString())} />
              </View>
            ))}
            <View style={styles.button}>
              <Button
                onPress={handleOperationPress('divide')}
                buttonStyle={{
                  backgroundColor:
                    mode === 'divide'
                      ? 'rgba(39, 39, 39, 1)'
                      : 'rgba(78, 116, 289, 1)',
                }}
                icon={<Icon name={'divide'} size={22} color="white" />}
              />
            </View>
          </View>
          <View style={styles.row}>
            {[4, 5, 6].map(i => (
              <View style={styles.button}>
                <Button title={i} onPress={handleDidgitPress(i.toString())} />
              </View>
            ))}
            <View style={styles.button}>
              <Button
                onPress={handleOperationPress('times')}
                buttonStyle={{
                  backgroundColor:
                    mode === 'times'
                      ? 'rgba(39, 39, 39, 1)'
                      : 'rgba(78, 116, 289, 1)',
                }}
                icon={<Icon name={'times'} size={22} color="white" />}
              />
            </View>
          </View>
          <View style={styles.row}>
            {[7, 8, 9].map(i => (
              <View style={styles.button}>
                <Button title={i} onPress={handleDidgitPress(i.toString())} />
              </View>
            ))}
            <View style={styles.button}>
              <Button
                onPress={handleOperationPress('minus')}
                buttonStyle={{
                  backgroundColor:
                    mode === 'minus'
                      ? 'rgba(39, 39, 39, 1)'
                      : 'rgba(78, 116, 289, 1)',
                }}
                icon={<Icon name={'minus'} size={22} color="white" />}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.zero}>
              <Button title={'0'} onPress={handleDidgitPress('0')} />
            </View>
            <View style={styles.button}>
              <Button
                onPress={handleOperationPress('plus')}
                buttonStyle={{
                  backgroundColor:
                    mode === 'plus'
                      ? 'rgba(39, 39, 39, 1)'
                      : 'rgba(78, 116, 289, 1)',
                }}
                icon={<Icon name={'plus'} size={22} color="white" />}
              />
            </View>
          </View>
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
