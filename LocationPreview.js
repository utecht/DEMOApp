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
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center'
  },
  picture: {
    width: '100%',
    height: 200,
    flex: 1
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  phoneLink: {
    color: 'blue'
  }
});

const LocationPreview = (props) => {
  const name = props.location.name;
  const picture = props.location.picture;
  const fullAddress = props.location.address;

  const url = Platform.select({
    ios: `maps:0,0?q=${fullAddress}`,
    android: `geo:0,0?q=${fullAddress}`,
  });

  let phoneNumber = ''
  if(props.location.contact_sections.length > 0){
    if(props.location.contact_sections[0].numbers.length > 0){
      phoneNumber = props.location.contact_sections[0].numbers[0].phone;
    }
  }

  return (
    <View style={styles.card}>
      <Image
        style={styles.picture}
        source={{uri: picture}}
      />
      <Text style={styles.title}>{name}</Text>
      <Text>{props.location.address}</Text>
      <Text style={styles.subtitle}>Appointment Phone Number</Text>
      <Text onPress={() => Linking.openURL('tel:'+phoneNumber)} style={styles.phoneLink}>{phoneNumber}</Text>
      <View style={styles.buttonBox}>
        <Button title="View Location" onPress={() => props.navigateTo(props.location)}/>
        <Button title="Get Directions" onPress={() => Linking.openURL(url)}/>
      </View>
    </View>
    )
}
export default LocationPreview;
