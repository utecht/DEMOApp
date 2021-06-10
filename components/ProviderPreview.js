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
  Linking,
  Platform
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 3,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,

  },
  picture: {
    width: 70,
    height: 70,
    ...Platform.select({
     ios: {
       marginTop: "10%",
       overflow: 'visible'
     },
     android: {
       marginTop: 0
     },
     default: {
       marginTop: "10%"
     }
  })},
  cropper: {
    width: 70,
    backgroundColor: 'grey',
    height: 70,
    marginTop: 15,
    borderRadius: 100,
    overflow: 'hidden'
  },
  cardContents: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    color: '#6b6869',
    flexGrow: 1,
  },
  button: {
    width: '100%',
  }
});

const ProviderPreview = (props) => {
  const name = props.provider.full_name;
  const subtitle = props.provider.title;
  const picture = props.provider.photo;

  return (
    <View style={styles.card}>
      <View style={styles.cropper}>
        <Image
          style={styles.picture}
          source={{uri:picture}}
        />
      </View>
      <View style={styles.cardContents}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Button style={styles.button} title="View Profile" onPress={() => props.navigateTo(props.provider)}/>
      </View>
    </View>
    )
}
export default ProviderPreview;
