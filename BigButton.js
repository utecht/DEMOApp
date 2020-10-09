/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BigButton = ({ text }) => {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate(text);
  return (
    <View style={buttonStyle.container}>
      <TouchableHighlight
        onPress={onPress}
        style={buttonStyle.button}
        underlayColor="red">
        <Text style={buttonStyle.text}>{text}</Text>
      </TouchableHighlight>
    </View>
  );
}

const buttonStyle = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2,
    height: 60,
    flex: 1,
    margin: 5,
  },
  button: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default BigButton;
