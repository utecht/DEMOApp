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

const ConditionButton = ({ condition, navigation }) => {
  function onPress() {
    navigation.navigate('ConditionModal',
        {url: condition.link});
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
        <Text style={style.text}>{condition.name}</Text>
      </TouchableHighlight>
    </View>
  );
}

const ConditionList = ({ conditions, navigation }) => {
  if(conditions === undefined){
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
  const condition_buttons = conditions.map(condition =>
    <ConditionButton key={condition.name} condition={condition} navigation={navigation}/>
  )
  return (
    <View style={style.container}>
      {condition_buttons}
    </View>
  )
}


export default ConditionList;
