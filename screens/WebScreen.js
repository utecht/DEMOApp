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

const WebScreen = ({ route, navigation }) => {
  const { html } = route.params;

  return (
    <WebView
      source={{html: html}}
      style={{flex: 1, paddingTop: 25}}
    />
    )
}
export default WebScreen;
