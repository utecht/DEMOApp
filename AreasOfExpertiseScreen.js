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

import aoes from './orbweaver/expertise.json';

const AreasOfExpertiseScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Our Areas of Expertise</Text>
      {Object.entries(aoes).map((arr)=>{
        let key = arr[0];
        let value = arr[1];
        return(<Text key={key}>{value.name}</Text>)
      })}
    </View>
    )
}
export default AreasOfExpertiseScreen;
