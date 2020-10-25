import React from 'react';
import {
  FlatList,
} from 'react-native';

import LocationPreview from '../components/LocationPreview';
import LOCATIONS from '../orbweaver/locations.json';

const LocationsScreen = ({ navigation }) => {
  function navTo(location){
    navigation.navigate('Location Detail', {
        location:location
      });
  }

  const renderItem = ({item, index, separators}) =>
      <LocationPreview location={item} navigateTo={navTo}/>;

  return (
    <FlatList
      style={{height: '100%'}}
      data={LOCATIONS}
      renderItem={renderItem}
      keyExtractor={(item)=>item.url}>
    </FlatList>
  )
}

export default LocationsScreen
