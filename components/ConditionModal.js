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
import { useDescription } from '../hooks/useDescription';

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

const ConditionModal = ({ route, navigation }) => {
  const { url } = route.params;
  const { description } = useDescription(url);
  if(description == undefined) {
    return (
      <SafeAreaView>
        <Text>Condition Not Found</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </SafeAreaView>
    )
  }

  const name = description.name.replace("Condition: ", "");

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
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{description.aka}</Text>
        <Button
          onPress={() =>
            navigation.navigate("Providers", {
              filters: [{filter: 'conditions_treated', value: url}]

            })
          }
          title={"View Providers Specializing in " + name} />
        <Text style={styles.text_box}>{description.description}</Text>
      </ScrollView>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </SafeAreaView>
  )
}


export default ConditionModal;
