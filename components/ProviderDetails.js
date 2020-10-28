/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  Image,
  Button,
  Linking
} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    display: 'flex'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  picture: {
    width: '80%',
    height: 400,
    flex: 1
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  phoneLink: {
    color: 'blue'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6b6869'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
    backgroundColor: '#c6c4c4',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    paddingLeft: 15,
  },
  textContent: {
    alignSelf: 'flex-start',
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
  }
});

const ProviderDetails = ({ route, navigation }) => {
  const { provider } = route.params;

  const name = provider.name;
  useEffect(() => {
    navigation.setOptions({title: name});
  });

  const picture = provider.picture;
  const languages = provider.languages.join(', ');

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.card}>
        <Image
          style={styles.picture}
          source={{uri: picture}}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{provider.subtitle}</Text>
        <Text style={styles.header}>Languages</Text>
        <Text style={styles.textContent}>{languages}</Text>
        <Text style={styles.header}>About</Text>
        <Text style={styles.textContent}>{provider.about}</Text>
      </View>
    </ScrollView>
    )
}
export default ProviderDetails;
