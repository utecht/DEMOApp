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
import { WebView } from 'react-native-webview';

const DirectionHTML = require('./html/Directions.html');

const DirectionScreen = ({ navigation }) => {
  return (
    <WebView
      source={DirectionHTML}
      style={{flex: 1}}
    />
    )
}
export default DirectionScreen;
