/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import AreasOfExpertiseScreen from './AreasOfExpertiseScreen';
import LocationPreview from './LocationPreview';
import LocationDetail from './LocationDetail';
import { WebView } from 'react-native-webview';
import { UAMSRed } from './UAMSColors';
import UAMSLogo from './UAMSLogo';
import IconButton from './IconButton';
import LocationsScreen from './LocationsScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Areas of Expertise" component={AreasOfExpertiseScreen} />
        <Stack.Screen name="Locations" component={LocationsScreen} />
        <Stack.Screen name="Conditions" component={ConditionsScreen} />
        <Stack.Screen name="Treatments" component={TreatmentsScreen} />
        <Stack.Screen name="Location Detail" component={LocationDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ConditionsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Conditions Treated at UAMS</Text>
    </View>
    )
}

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
  return (
    <>
      <StatusBar barStyle="dark-content" />
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
                Linking.openURL('https://mychart.uamshealth.com').catch(err => console.error('An error occurred', err))
              }
            />
            <IconButton
              label="Food"
              iconColor="white"
              size={25}
              icon="fork"
              onPress={() =>
                Linking.openURL('https://uamshealth.com/patients-and-guests/food-and-lodging/dining/').catch(err => console.error('An error occurred', err))
              }
            />
            <IconButton
              label="Directions"
              iconColor="white"
              size={25}
              icon="traffic_sign"
              onPress={() =>
                Linking.openURL('https://uamshealth.com/maps-and-directions/').catch(err => console.error('An error occurred', err))
              }
            />
            <IconButton
              label="Contact"
              iconColor="white"
              icon="phone"
              size={25}
              onPress={() =>
                Linking.openURL('https://uamshealth.com/contact-us/').catch(err => console.error('An error occurred', err))
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
                    navigation.navigate("Locations")
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
    backgroundColor: 'darkgrey',
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
