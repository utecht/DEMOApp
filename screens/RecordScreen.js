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

const RecordHTML = require('./html/Record.html');

const RecordScreen = ({ navigation }) => {
  return (
    <WebView
      source={RecordHTML}
      style={{flex: 1}}
    />
    )
}
export default RecordScreen;
