import React, { useState } from 'react';
import {
  FlatList,
  TextInput,
  StyleSheet
} from 'react-native';

import ProviderPreview from '../components/ProviderPreview';
import { useProviderList } from '../hooks/useProviderList';

const ProvidersScreen = ({ route, navigation }) => {
  const [text, setText] = useState('');
  const { filters } = route.params;

  function navTo(provider){
    navigation.navigate('Provider Detail', {
        provider_id: provider.provider_id
      });
  }

  const styles = StyleSheet.create({
    filterBox: {
      height: 40,
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 25,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 25,
      paddingLeft: 5,
    }
  });

  const renderItem = ({item, index, separators}) =>
    <ProviderPreview provider={item} navigateTo={navTo}/>;

  const { providers } = useProviderList();
  /*const providers = PROVIDERS.filter(row =>
    text.length === 0 ||
    row.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
  ).filter(row => {
    let ret = true;
    for(let f of filters){
      ret = false;
      for(let v of row[f.filter]){
        if(v.link === f.value){
          ret = true;
        }
      }
    }
    return ret
  });*/


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
        keyExtractor={(item)=>item.provider_id.toString()}>
      </FlatList>
    </>
  )
}

export default ProvidersScreen
