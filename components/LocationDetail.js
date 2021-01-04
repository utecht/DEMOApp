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
import DescriptionList from './DescriptionList';

const styles = StyleSheet.create({
  scrollView: {
    display: 'flex'
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  picture: {
    width: '100%',
    height: 200,
    flex: 1
  },
  buttonBox: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
    paddingBottom: 0,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 15,
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
    marginTop: -15,
    marginLeft: 15,
    marginRight: 15,
  },
  address_box: {
    marginLeft: 15,
    marginRight: 15
  },
  hour_box: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15,
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
  },
  subtext: {
    color: '#5d5b5c',
    fontSize: 12
  },
  text_box: {
    paddingLeft: 15,
    paddingRight: 15,
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
          <Text onPress={() => Linking.openURL('tel:'+number.phone)} style={styles.phoneLink}>📞 {number.phone}</Text>
          {number.subtitle ? <Text style={styles.subtext}>{number.subtitle}</Text> : <></>}
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
      <Text style={styles.text_box}>{location.parking}</Text>
    </> : <></>;

  const appointment = location.appointment_info !== undefined ?
    <>
      <Text style={styles.section_title}>Appointment Information</Text>
      <Text style={styles.text_box}>{location.appointment_info}</Text>
    </> : <></>;

  const conditions_treated = location.conditions_treated.length > 0 ?
    <>
      <Text style={styles.section_title}>Conditions Treated</Text>
      <DescriptionList navigation={navigation} items={location.conditions_treated}/>
    </> : <></>;

  const treatments = location.treatments.length > 0 ?
    <>
      <Text style={styles.section_title}>Treatments</Text>
      <DescriptionList navigation={navigation} items={location.treatments}/>
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
        <Text style={styles.section_title}>Contact</Text>
        <View style={styles.phone_box}>{contact}</View>
        <Text style={styles.section_title}>Address</Text>
        <Text style={styles.address_box}>{location.address}</Text>
        <View style={styles.buttonBox}>
          <Button title="Get Directions" onPress={() => Linking.openURL(url)}/>
        </View>
        <Text style={styles.section_title}>Hours</Text>
        <View style={styles.hour_box}>{hours}</View>
        {parking_info}
        {appointment}
        {conditions_treated}
        {treatments}
      </View>
    </ScrollView>
    )
}
export default LocationDetail;
