import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const back = require('../assets/Icon/back.png');
const dots = require('../assets/Icon/dots.png');

import vehiclesData from '../dataset/vehicles.json'
const image_v_1 = require('../assets/vehicles/v-1.png');
const image_v_2 = require('../assets/vehicles/v-2.png');
const image_v_3 = require('../assets/vehicles/v-3.png');
const image_v_4 = require('../assets/vehicles/v-4.png');


const InfoScreen = ({props}) => {

  const vehicle=vehiclesData.filter((element)=> element.id ==props.route.params.id)
  const getImage = (id) => {
    if (id == 1) return image_v_1;
    if (id == 2) return image_v_2;
    if (id == 3) return image_v_3;
    if (id == 4) return image_v_4;
  }

  console.log(vehicle)
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Image
          source={back}
          resizeMode="contain"
          style={styles.menuIconStyle}
        />
        <Text style={styles.headerTxt}>Detail</Text>
        <Image
          source={dots}
          resizeMode="contain"
          style={styles.faceIconStyle}
        />
      </View>
      <View style={styles.imageSection}>
        <Image
          source={getImage(vehicle.id)}
          resizeMode="contain"
          style={styles.faceIconStyle}
        />
      </View>
    </View>
  )
}

export default InfoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerSection: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIconStyle: {
    width: 25,
  },
  headerTxt: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700'
  },
  faceIconStyle: {
    width: 25,
  },
  imageSection:{
    width:50,
    height:50,
    flex:1,
    backgroundColor:'red'
  }
})