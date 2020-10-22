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
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
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

const LocationDetail = ({ route, navigation }) => {
  const { location } = route.params;

  const name = location.name;
  useEffect(() => {
    navigation.setOptions({title: name});
  });

  const picture = location.picture;
  const fullAddress = location.address;

  const url = Platform.select({
    ios: `maps:0,0?q=${fullAddress}`,
    android: `geo:0,0?q=${fullAddress}`,
  });

  let phoneNumber = ''
  if(location.contact_sections.length > 0){
    if(location.contact_sections[0].numbers.length > 0){
      phoneNumber = location.contact_sections[0].numbers[0].phone;
    }
  }

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
        <Text>{location.address}</Text>
        <Text style={styles.subtitle}>Appointment Phone Number</Text>
        <Text onPress={() => Linking.openURL('tel:'+phoneNumber)} style={styles.phoneLink}>{phoneNumber}</Text>
        <View style={styles.buttonBox}>
          <Button title="Get Directions" onPress={() => Linking.openURL(url)}/>
        </View>
        <Text>{location.parking}</Text>
        <Text>{location.appointment_info}</Text>
      </View>
    </ScrollView>
    )
}
export default LocationDetail;
