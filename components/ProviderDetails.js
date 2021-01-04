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
import DescriptionList from '../components/DescriptionList';
import { useProviderDetails } from '../hooks/useProviderDetails';

const styles = StyleSheet.create({
  scrollView: {
    display: 'flex'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  picture: {
    width: '80%',
    height: 400,
    flex: 1,
    alignSelf: 'center'
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  phoneLink: {
    color: 'blue'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6b6869'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
    backgroundColor: '#c6c4c4',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    paddingLeft: 15,
  },
  textContent: {
    alignSelf: 'flex-start',
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
  }
});

const ProviderDetails = ({ route, navigation }) => {
  const { provider_id } = route.params;
  const { provider } = useProviderDetails(provider_id);
  useEffect(() => {
    navigation.setOptions({title: provider === undefined ? '' : provider.name});
  }, [provider]);
  if(provider === undefined){
    return <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.card}>
      </View>
    </ScrollView>
  }


  const picture = provider.picture;
  const languages = provider.languages.join(', ');

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.card}>
        <Image
          style={styles.picture}
          source={{uri: picture}}
        />
        <Text style={styles.title}>{provider.name}</Text>
        <Text style={styles.subtitle}>{provider.subtitle}</Text>
        <Text style={styles.header}>Languages</Text>
        <Text style={styles.textContent}>{languages}</Text>
        <Text style={styles.header}>About</Text>
        <Text style={styles.textContent}>{provider.about}</Text>
        {provider.expertises.length > 0 ? <>
        <Text style={styles.header}>Areas of Expertise</Text>
        <DescriptionList items={provider.expertises} navigation={navigation}/>
        </>: <></>}
        {provider.conditions.length > 0 ? <>
        <Text style={styles.header}>Conditions Treated</Text>
        <DescriptionList items={provider.conditions} navigation={navigation}/>
        </>: <></>}
        {provider.treatments.length > 0 ? <>
        <Text style={styles.header}>Treatments</Text>
        <DescriptionList items={provider.treatments} navigation={navigation}/>
        </>: <></>}
      </View>
    </ScrollView>
    )
}
export default ProviderDetails;
