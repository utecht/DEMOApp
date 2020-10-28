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
  Platform,
  PlatformColor,
} from 'react-native';
import LocationImages from '../LocationImages';

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 5,
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
    width: '100%',
    height: 200,
    flex: 1,
  },
  cardContents: {
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  phone_numbers: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  phoneLink: {
    textAlign: 'center',
    ...Platform.select({
     ios: {
       color: PlatformColor('link')
     },
     android: {
       color: 16842907
     },
     default: {
       color: 'blue'
     }
   })
  },
  day: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  address: {
    margin: 10,
  }
});

const LocationPreview = (props) => {
  const name = props.location.name;
  const picture = props.location.picture;
  const fullAddress = props.location.address;
  const image_source = LocationImages[props.location.url];

  const url = Platform.select({
    ios: `maps:0,0?q=${fullAddress}`,
    android: `geo:0,0?q=${fullAddress}`,
  });

  let phoneNumber = ''
  if(props.location.contact_sections && props.location.contact_sections.length > 0){
    if(props.location.contact_sections[0].numbers.length > 0){
      phoneNumber = props.location.contact_sections[0].numbers[0].phone;
    }
  }

  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date();
  const today_string = DAYS[d.getDay()];
  const hours = props.location.hours.filter(day =>
    day.day == today_string
  ).map((day, i) =>
    <View key={i} style={styles.day}>
      <Text>Hours Today</Text>
      <Text>{day.hour}</Text>
    </View>
  );

  return (
    <View style={styles.card}>
      <Image
        style={styles.picture}
        source={image_source}
      />
      <View style={styles.cardContents}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{props.location.address}</Text>
        {hours}
        <Text style={styles.phone_numbers}>Appointment Phone Number</Text>
        <Text onPress={() => Linking.openURL('tel:'+phoneNumber)} style={styles.phoneLink}>📞 {phoneNumber}</Text>
        <View style={styles.buttonBox}>
          <Button title="View Location" onPress={() => props.navigateTo(props.location)}/>
          <Button title="Get Directions" onPress={() => Linking.openURL(url)}/>
        </View>
      </View>
    </View>
    )
}
export default LocationPreview;
