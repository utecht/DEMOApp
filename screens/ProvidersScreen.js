import React from 'react';
import {
  FlatList,
} from 'react-native';

import ProviderPreview from '../components/ProviderPreview';
import PROVIDERS from '../orbweaver/providers.json';

const ProvidersScreen = ({ navigation }) => {
  function navTo(provider){
    navigation.navigate('Provider Detail', {
        provider:provider
      });
  }

  const renderItem = ({item, index, separators}) =>
      <ProviderPreview provider={item} navigateTo={navTo}/>;

  return (
    <FlatList
      style={{height: '100%'}}
      data={PROVIDERS}
      renderItem={renderItem}
      keyExtractor={(item)=>item.url}>
    </FlatList>
  )
}

export default ProvidersScreen
