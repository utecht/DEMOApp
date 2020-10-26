import React, { useState } from 'react';
import {
  FlatList,
  TextInput,
  StyleSheet
} from 'react-native';

import ProviderPreview from '../components/ProviderPreview';
import PROVIDERS from '../orbweaver/providers.json';

const ProvidersScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  function navTo(provider){
    navigation.navigate('Provider Detail', {
        provider:provider
      });
  }

  const styles = StyleSheet.create({
    filterBox: {
      height: 30,
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 25,
      margin: 5,
      paddingLeft: 5,
    }
  });

  const renderItem = ({item, index, separators}) =>
    <ProviderPreview provider={item} navigateTo={navTo}/>;

  const providers = PROVIDERS.filter(row =>
    text.length === 0 ||
    row.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
  );

  return (
    <>
      <TextInput
        style={styles.filterBox}
        placeholder="Search for Providers"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <FlatList
        style={{height: '100%'}}
        data={providers}
        renderItem={renderItem}
        keyExtractor={(item)=>item.url}>
      </FlatList>
    </>
  )
}

export default ProvidersScreen
