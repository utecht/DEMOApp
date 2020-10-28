/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import IconButton from '../components/IconButton';
import { UAMSRed } from '../UAMSColors';

const AreasOfExpertiseScreen = ({ navigation }) => {

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: UAMSRed,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    button: {
      width: 100,
      height: 100
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <IconButton
          label="Psychiatry"
          iconColor="red"
          size={50}
          icon="mental_health"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Burn Care"
          iconColor="red"
          size={50}
          icon="ambulance"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Cancer Care"
          iconColor="red"
          size={50}
          icon="tomography"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Dentile Care"
          iconColor="red"
          size={50}
          icon="tooth"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Diabetes and Endocrinology Care"
          iconColor="red"
          size={50}
          icon="diabetes"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Digestive Health"
          iconColor="red"
          size={50}
          icon="stomach"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Ear Nose and Throat Care"
          iconColor="red"
          size={50}
          icon="ear"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Emergency Care"
          iconColor="red"
          size={50}
          icon="ambulance"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Eye Care"
          iconColor="red"
          size={50}
          icon="eye"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Hearing and Balance"
          iconColor="red"
          size={50}
          icon="hearing"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Heart and Vascular Care"
          iconColor="red"
          size={50}
          icon="heart"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Neurology"
          iconColor="red"
          size={50}
          icon="brain"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Neurosurgery"
          iconColor="red"
          size={50}
          icon="neurosurgery"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
      <View style={styles.button}>
        <IconButton
          label="Organ Transplant"
          iconColor="red"
          size={50}
          icon="kidney"
          onPress={() =>
            navigation.navigate("Providers")
          }
        />
      </View>
    </View>
    )
}
export default AreasOfExpertiseScreen;
