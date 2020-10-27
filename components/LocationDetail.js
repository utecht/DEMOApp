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
  Linking,
  Platform,
  PlatformColor,
} from 'react-native';
import LocationImages from '../LocationImages';

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
  section_title: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  phoneLink: {
    ...Platform.select({
     ios: { color: PlatformColor('link') },
     android: {
       color: 16842907
     },
     default: { color: 'blue' }
   })
  },
  phone_box: {
    margin: 15,
  },
  address_box: {
    marginLeft: 15,
    marginRight: 15
  },
  hour_box: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: 15,
  },
  day: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  today: {
    color: 'green',
    fontWeight: 'bold'
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
  const image_source = LocationImages[location.url];

  const url = Platform.select({
    ios: `maps:0,0?q=${fullAddress}`,
    android: `geo:0,0?q=${fullAddress}`,
  });

  const contact = location.contact_sections.map((section, i) =>
    <View key={i}>
      <Text style={styles.subtitle}>{section.name}</Text>
      {section.numbers.map((number, inum) =>
        <View key={inum}>
          <Text onPress={() => Linking.openURL('tel:'+number.phone)} style={styles.phoneLink}>{number.phone}</Text>
          <Text>{number.subtitle}</Text>
        </View>
      )}
    </View>
  );
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date();
  const today_string = DAYS[d.getDay()];
  const hours = location.hours.map((day, i) =>
    <View key={i} style={styles.day}>
      <Text style={[today_string == day.day ? styles.today : null]}>{day.day}</Text>
      <Text style={[today_string == day.day ? styles.today : null]}>{day.hour}</Text>
    </View>
  );

  const parking_info = location.parking !== undefined ?
    <>
      <Text style={styles.section_title}>Parking Info</Text>
      <Text>{location.parking}</Text>
    </> : <></>;

  const appointment = location.appointment_info !== undefined ?
    <>
      <Text style={styles.section_title}>Appointment Information</Text>
      <Text>{location.appointment_info}</Text>
    </> : <></>;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Image
        style={styles.picture}
        source={image_source}
      />
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.phone_box}>{contact}</View>
        <Text style={styles.address_box}>{location.address}</Text>
        <View style={styles.buttonBox}>
          <Button title="Get Directions" onPress={() => Linking.openURL(url)}/>
        </View>
        <Text style={styles.section_title}>Hours</Text>
        <View style={styles.hour_box}>{hours}</View>
        {parking_info}
        {appointment}
      </View>
    </ScrollView>
    )
}
export default LocationDetail;
