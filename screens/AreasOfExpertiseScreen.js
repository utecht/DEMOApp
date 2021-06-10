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
      <Text style={styles.text}>{aoe.content}</Text>
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
              setAoeUID(10823)
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
              setAoeUID(10683)
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
              setAoeUID(10684)
            }
          />
        </View>
        <View style={styles.button}>
          <IconButton
            label="Dental Care"
            iconColor="red"
            size={icon_size}
            icon="tooth"
            onPress={() =>
              setAoeUID(11063)
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
              setAoeUID(11026)
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
              setAoeUID(10723)
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
              setAoeUID(10724)
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
              setAoeUID(10725)
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
              setAoeUID(11043)
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
              setAoeUID(10791)
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
              setAoeUID(10761)
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
              setAoeUID(10799)
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
              setAoeUID(58429)
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
              setAoeUID(10754)
            }
          />
        </View>
      </View>
      <AreasOfExpertiseView aoe={aoe} navigation={navigation}/>
    </ScrollView>
    )
}
export default AreasOfExpertiseScreen;
