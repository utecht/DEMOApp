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
  Image,
  Button,
  Linking
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '90%'
  },
  picture: {
    width: 100,
    height: 200,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'grey'
  },
  cardContents: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6b6869',
    flexGrow: 1,
  },
  button: {
    width: '100%',
  }
});

const ProviderPreview = (props) => {
  const name = props.provider.name;
  const subtitle = props.provider.subtitle;
  const picture = props.provider.picture;

  return (
    <View style={styles.card}>
      <Image
        style={styles.picture}
        source={{uri:picture}}
      />
      <View style={styles.cardContents}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Button style={styles.button} title="View Profile" onPress={() => props.navigateTo(props.provider)}/>
      </View>
    </View>
    )
}
export default ProviderPreview;
