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
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BigButton from './BigButton';
import AreasOfExpertiseScreen from './AreasOfExpertiseScreen';

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
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Areas of Expertise" component={AreasOfExpertiseScreen} />
        <Stack.Screen name="Locations" component={LocationsScreen} />
        <Stack.Screen name="Conditions" component={ConditionsScreen} />
        <Stack.Screen name="Treatments" component={TreatmentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TestScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
    )
}

const LocationsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>UAMS Locations</Text>
    </View>
    )
}

const ConditionsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Conditions Treated at UAMS</Text>
    </View>
    )
}

const TreatmentsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Treatments Avaliable at UAMS</Text>
    </View>
    )
}

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.buttonContainer}>
              <BigButton text="Areas of Expertise"/>
              <BigButton text="Locations"/>
            </View>
            <View style={styles.buttonContainer}>
              <BigButton text="Conditions"/>
              <BigButton text="Treatments"/>
            </View>
          </View>
          <Button
            title="Go to Test Scene"
            onPress={() =>
              navigation.navigate('Test')
            }
          />
          <WideImage />
        </ScrollView>
      </SafeAreaView>
    </>
    )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightgrey',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'grey',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
});

const WideImage = (props) => {
  return (
    <Image
      source={require('./images/test.jpg')}
    />
    )
}

export default App;
