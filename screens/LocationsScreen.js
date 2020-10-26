import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';

import LocationPreview from '../components/LocationPreview';
import LOCATIONS from '../orbweaver/locations.json';

const LocationsScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  function navTo(location){
    navigation.navigate('Location Detail', {
        location:location
      });
  }

  const renderItem = ({item, index, separators}) =>
      <LocationPreview location={item} navigateTo={navTo}/>;

  const locations = LOCATIONS.filter(row =>
    text.length === 0 ||
    row.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
  );

  const styles = StyleSheet.create({
    filterBox: {
      height: 40,
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 25,
      margin: 20,
      paddingLeft: 5,
    }
  });

  return (
    <>
      <TextInput
        style={styles.filterBox}
        placeholder="Search for Locations"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <FlatList
        style={{height: '100%'}}
        data={locations}
        renderItem={renderItem}
        keyExtractor={(item)=>item.url}>
      </FlatList>
    </>
  )
}

export default LocationsScreen
