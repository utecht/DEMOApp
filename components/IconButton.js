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
import { UAMSRed } from '../UAMSColors';
import Icons from '../Icons';

const IconButton = ({ label, onPress, icon, iconColor, size }) => {
  const Icon = Icons[icon];
  return (
    <View style={buttonStyle.container}>
      <TouchableHighlight
        onPress={onPress}
        style={buttonStyle.button}
        underlayColor='#43414259'>
        <View style={buttonStyle.iconContainer}>
          <Icon style={{color: iconColor, width: size, height: size}}/>
          <Text style={buttonStyle.text}>{label}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const buttonStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  }
});

export default IconButton;
