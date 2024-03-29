/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Linking,
  FlatList,
  ImageBackground,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AreasOfExpertiseScreen from './screens/AreasOfExpertiseScreen';
import LocationPreview from './components/LocationPreview';
import LocationDetail from './components/LocationDetail';
import { WebView } from 'react-native-webview';
import { UAMSRed } from './UAMSColors';
import UAMSLogo from './UAMSLogo';
import IconButton from './components/IconButton';
import AttributeModal from './components/AttributeModal';
import LocationsScreen from './screens/LocationsScreen';
import ProvidersScreen from './screens/ProvidersScreen';
import ProviderDetails from './components/ProviderDetails';
import WebScreen from './screens/WebScreen';
import { DatabaseProvider } from './database/DatabaseContext';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Areas of Expertise" component={AreasOfExpertiseScreen} />
      <Stack.Screen name="Locations" component={LocationsScreen} />
      <Stack.Screen name="Dining" component={WebScreen} />
      <Stack.Screen name="Directions" component={WebScreen} />
      <Stack.Screen name="Contact" component={WebScreen} />
      <Stack.Screen name="Records" component={WebScreen} />
      <Stack.Screen name="Treatments" component={TreatmentsScreen} />
      <Stack.Screen name="Providers" component={ProvidersScreen} />
      <Stack.Screen name="Location Detail" component={LocationDetail}/>
      <Stack.Screen name="Provider Detail" component={ProviderDetails}/>
    </Stack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <DatabaseProvider>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="main" component={MainStackScreen}/>
          <RootStack.Screen name="AttributeModal" component={AttributeModal}/>
        </RootStack.Navigator>
      </DatabaseProvider>
    </NavigationContainer>
  );
};

const TreatmentsScreen = ({ navigation }) => {
  return (
    <WebView
      source={{ uri: 'https://uamshealth.com/treatment' }}
      style={{ marginBottom: 0 }}
      allowsBackForwardNavigationGestures={true}
    />
    )
}

const HomeScreen = ({ navigation }) => {
  /*
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/status')
      .then((response) => response.json())
      .then((json) => setData(json.latest_version))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  */

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white"/>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.logoBox}>
            <Image style={{width: '100%', opacity: 0.7, height: 150}} source={require('./images/Splash.jpg')}/>
            <UAMSLogo style={styles.logo}/>
          </View>
          <View style={styles.redBar}>
            <IconButton
              label="Records"
              iconColor="white"
              size={25}
              icon="medical_record"
              onPress={() =>
                navigation.navigate("Records",
                  {html: require('./screens/html/Record').template()}
                )
              }
            />
            <IconButton
              label="Food"
              iconColor="white"
              size={25}
              icon="fork"
              onPress={() =>
                navigation.navigate("Dining",
                  {html: require('./screens/html/Dining').template()}
                )
              }
            />
            <IconButton
              label="Directions"
              iconColor="white"
              size={25}
              icon="traffic_sign"
              onPress={() =>
                navigation.navigate("Directions",
                  {html: require('./screens/html/Directions').template()}
                )
              }
            />
            <IconButton
              label="Contact"
              iconColor="white"
              icon="phone"
              size={25}
              onPress={() =>
                navigation.navigate("Contact",
                  {html: require('./screens/html/Contact').template()}
                )
              }
            />
          </View>
          <View>
            <View style={styles.buttonContainer}>
              <View style={styles.darkButton}>
                <IconButton
                  label="MyChart"
                  iconColor="white"
                  size={50}
                  icon="medical_record"
                  onPress={() =>
                    Linking.openURL('https://mychart.uamshealth.com').catch(err => console.error('An error occurred', err))
                  }
                />
              </View>
              <View style={styles.darkButton}>
                <IconButton
                  icon="hospital"
                  iconColor="white"
                  size={50}
                  onPress={() =>
                    navigation.navigate("Locations")
                  }
                  label="Hospitals and Clinics"/>
              </View>
              <View style={styles.darkButton}>
                <IconButton
                  icon="provider"
                  iconColor="white"
                  size={50}
                  onPress={() =>
                    navigation.navigate("Providers", {filters: []})
                  }
                  label="Find a Provider"/>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.darkButton}>
                <IconButton
                  label="Appointments"
                  iconColor="white"
                  size={50}
                  icon="calendar"
                  onPress={() =>
                    Linking.openURL('https://uamshealth.com/make-an-appointment/').catch(err => console.error('An error occurred', err))
                  }
                />
              </View>
              <View style={styles.darkButton}>
                <IconButton
                  icon="doctor_bag"
                  iconColor="white"
                  size={50}
                  onPress={() =>
                    navigation.navigate("Areas of Expertise")
                  }
                  label="Medical Services"/>
              </View>
              <View style={styles.darkButton}>
                <IconButton
                  icon="bill"
                  iconColor="white"
                  size={50}
                  onPress={() =>
                    Linking.openURL('https://mychart.uamshealth.com/Billing/GuestPay/').catch(err => console.error('An error occurred', err))
                  }
                  label="Pay a Bill"/>
              </View>
            </View>
            <View style={styles.covidBanner}>
              <Text style={styles.covidHeader}>COVID-19 Updates</Text>
              <Text style={styles.covidText}>Find current Coronavirus Disease (COVID-19) information for patients, students, employees and
                health care providers at <Text
                onPress={() => Linking.openURL('https://uamshealth.com/coronavirus')}
                style={styles.hyperlink}>UAMSHealth.com/coronavirus.</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
    )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#e3e3e3',
    height: '100%',
  },
  scrollView: {
    height: '100%'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  logoBox: {
    position: 'relative',
    backgroundColor: '#000000',
  },
  logo: {
    width: '70%',
    height: '70%',
    zIndex: 1,
    position: 'absolute',
    left: '15%',
    top: '15%'
  },
  redBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: UAMSRed,
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  darkButton: {
    color: 'white',
    backgroundColor: '#6b6869',
    height: 120,
    width: 120,
    marginTop: 20,
  },
  covidBanner: {
    marginTop: 25,
    height: '100%',
    width: '100%',
    backgroundColor: '#eb712f',
    display: 'flex',
    flexDirection: 'column',
  },
  covidText: {
    color: 'white',
    margin: 25,
    textAlign: 'center',
  },
  covidHeader: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  hyperlink: {
    textDecorationLine: 'underline'
  }
});

export default App;
