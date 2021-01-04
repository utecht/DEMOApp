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

const ItemButton = ({ item, navigation }) => {
  function onPress() {
    navigation.navigate('TreatmentModal',
        {url: item.link});
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
        <Text style={style.text}>{item.name}</Text>
      </TouchableHighlight>
    </View>
  );
}

const DescriptionList = ({ items, navigation }) => {
  if(items === undefined){
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
  const item_buttons = items.map(item =>
    <ItemButton key={item.name} item={item} navigation={navigation}/>
  )
  return (
    <View style={style.container}>
      {item_buttons}
    </View>
  )
}


export default DescriptionList;
