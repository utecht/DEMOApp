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

const ContactHTML = require('./html/Contact.html');

const ContactScreen = ({ navigation }) => {
  return (
    <WebView
      source={ContactHTML}
      style={{flex: 1}}
    />
    )
}
export default ContactScreen;
