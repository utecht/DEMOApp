/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import IconButton from '../components/IconButton';
import ConditionList from '../components/ConditionList';
import TreatmentList from '../components/TreatmentList';
import { UAMSRed } from '../UAMSColors';
import AOES from '../orbweaver/expertise.json';
import { useAOE } from '../hooks/useAOE';


const AreasOfExpertiseView = ({ aoe, navigation }) => {
  if(aoe == undefined){
    return <></>
  }
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: UAMSRed,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    },
    button: {
      width: 95,
      height: 95
    },
    scrollView: {
      height: '100%',
      width: '100%',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      padding: 15,
      paddingBottom: 0,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: 'bold',
      paddingLeft: 15,
      color: 'gray'
    },
    section_title: {
      marginTop: 15,
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: '#c6c4c4',
      padding: 10,
      paddingLeft: 15,
      marginBottom: 15,
    },
    text: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    list_box: {
      padding: 15
    }
  });
  return (
    <View>
      <Text style={styles.title}>{aoe.name}</Text>
      <Text style={styles.subtitle}>{aoe.aka}</Text>
      <Text style={styles.text}>{aoe.description}</Text>
      {aoe.conditions_treated.length > 0 ? <Text style={styles.section_title}>Conditions Treated</Text> : <></>}
      <ConditionList style={styles.list_box} conditions={aoe.conditions_treated} navigation={navigation}/>
      {aoe.treatments.length > 0 ? <Text style={styles.section_title}>Treatments</Text> : <></>}
      <TreatmentList style={styles.list_box} treatments={aoe.treatments} navigation={navigation}/>
    </View>
    )

};

const AreasOfExpertiseScreen = ({ navigation }) => {
  const [aoeUID, setAoeUID] = useState(undefined);
  const { aoe } = useAOE(aoeUID);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: UAMSRed,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    },
    button: {
      width: 95,
      height: 95
    },
    scrollView: {
      height: '100%',
      width: '100%',
    }
  });

  const icon_size = 50;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.button}>
          <IconButton
            label="Psychiatry"
            iconColor="red"
            size={icon_size}
            icon="mental_health"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/behavioral-care/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Burn Care"
            iconColor="red"
            size={icon_size}
            icon="burn"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/burn-care/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Cancer Care"
            iconColor="red"
            size={icon_size}
            icon="tomography"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/cancer-care/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Dentale Care"
            iconColor="red"
            size={icon_size}
            icon="tooth"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/dental-care/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Diabetes Care"
            iconColor="red"
            size={icon_size}
            icon="diabetes"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/diabetes-and-endocrinology-care/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Digestive Health"
            iconColor="red"
            size={icon_size}
            icon="stomach"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/digestive-health/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Ear Nose and Throat"
            iconColor="red"
            size={icon_size}
            icon="ear"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/ear-nose-throat-care/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Emergency Care"
            iconColor="red"
            size={icon_size}
            icon="ambulance"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/emergency-care/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Eye Care"
            iconColor="red"
            size={icon_size}
            icon="eye"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/eye-care/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Hearing and Balance"
            iconColor="red"
            size={icon_size}
            icon="hearing"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/hearing-and-balance/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Heart and Vascular"
            iconColor="red"
            size={icon_size}
            icon="heart"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/heart-and-vascular-care/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Neurology"
            iconColor="red"
            size={icon_size}
            icon="brain"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/neurology/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Neurosurgery"
            iconColor="red"
            size={icon_size}
            icon="neurosurgery"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/neurosurgery/')
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Organ Transplant"
            iconColor="red"
            size={icon_size}
            icon="kidney"
            onPress={() =>
              setAoeUID('https://uamshealth.com/expertise/organ-transplant/')
            }
          />
        </View>
      </View>
      <AreasOfExpertiseView aoe={aoe} navigation={navigation}/>
    </ScrollView>
    )
}
export default AreasOfExpertiseScreen;
