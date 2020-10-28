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

import TREATMENTS from '../orbweaver/treatments.json';

const TreatmentButton = ({ treatment, navigation }) => {
  function onPress() {
    navigation.navigate('TreatmentModal',
        {treatment: TREATMENTS[treatment.link],
         url: treatment.link});
  }
  const style = StyleSheet.create({
    container: {
      marginLeft: 15,
    },
    button: {
      flex: 1,
    },
    text: {
      fontWeight: '600',
    },
  });
  return (
    <View style={style.container}>
      <TouchableHighlight
        onPress={onPress}
        style={style.button}
        underlayColor='#43414259'>
        <Text style={style.text}>{treatment.name}</Text>
      </TouchableHighlight>
    </View>
  );
}

const TreatmentList = ({ treatments, navigation }) => {
  if(treatments === undefined){
    return <></>
  }
  const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
      flex: 1,
    },
    text: {
      fontWeight: '600',
    },
  });
  const treatment_buttons = treatments.map(treatment =>
    <TreatmentButton key={treatment.name} treatment={treatment} navigation={navigation}/>
  )
  return (
    <View style={style.container}>
      {treatment_buttons}
    </View>
  )
}


export default TreatmentList;
