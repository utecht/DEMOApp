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

const DinningHTML = require('./html/Dinning.html');

const DinningScreen = ({ navigation }) => {
  return (
    <WebView
      source={DinningHTML}
      style={{flex: 1}}
    />
    )
}
export default DinningScreen;
