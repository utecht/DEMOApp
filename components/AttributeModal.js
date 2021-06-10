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
  Button,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { useAttribute } from '../hooks/useAttribute';

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

const AttributeModal = ({ route, navigation }) => {
  const { url } = route.params;
  const { attribute } = useAttribute(url);
  if(attribute == undefined) {
    return (
      <SafeAreaView>
        <Text>Attribute Not Found</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      padding: 15,
      paddingBottom: 0,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: 'bold',
      paddingLeft: 15,
      color: 'gray'
    },
    section_title: {
      marginTop: 15,
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: '#c6c4c4',
      padding: 10,
      paddingLeft: 15,
      marginBottom: 15,
    },
    text_box: {
      paddingLeft: 15,
      paddingRight: 15,
    }
  });

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.title}>{attribute.name}</Text>
        <Button
          onPress={() =>
            navigation.navigate("Providers", {
              filters: [{filter: attribute.atype, value: attribute.id}]

            })
          }
          title={"View Providers Specializing in " + attribute.name} />
        <Text style={styles.text_box}>{attribute.content}</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </ScrollView>
    </SafeAreaView>
  )
}


export default AttributeModal;
