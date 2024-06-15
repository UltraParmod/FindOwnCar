import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

// Image
const menu = require('../../assets/Icon/menu.png');
const face = require('../../assets/Icon/face.png');
const magnifying_glass = require('../../assets/Icon/magnifying-glass.png');

const image_v_1 = require('../../assets/vehicles/v-1.png');
const image_v_2 = require('../../assets/vehicles/v-2.png');
const image_v_3 = require('../../assets/vehicles/v-3.png');
const image_v_4 = require('../../assets/vehicles/v-4.png');

import vehiclesData from '../../dataset/vehicles.json'


const getImage=(id)=>{
    if(id==1)return image_v_1;
    if(id==2)return image_v_2;
    if(id==3)return image_v_3;
    if(id==4)return image_v_4;
}
const Home = ({navigation}) => {
 const [vehicles,setVehicles]=useState(vehiclesData.vehicles)
 const [filter,setfilter]=useState(vehiclesData.vehicles)
 const searchVehicle=(keyword)=>{
  const lowercasedkeyword=keyword.toLowerCase()
  const result=vehicles.filter(item => {
    return item.make.toLocaleLowerCase().includes(lowercasedkeyword)
  })
setfilter(result)
 }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.headerSection}>
        <Image
          source={menu}
          resizeMode="contain"
          style={styles.menuIconStyle}
        />
        <Image
          source={face}
          resizeMode="contain"
          style={styles.faceIconStyle}
        />
      </View>

      <View style={styles.titleSection}>
        <Text style={styles.title}>Rent a car</Text>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.searchPellet}>
          <TextInput
            placeholder="Find Car here .."
            style={styles.searchInput}
            onChangeText={(text)=>searchVehicle(text)}
          />
          <View style={styles.searchIconArea}>
            <Image
              source={magnifying_glass}
              resizeMode="contain"
              style={styles.magnifyingIconStyle}
            />
          </View>
        </View>
      </View>

      <View style={styles.typeSection}>
        <Text style={styles.typeTxtActive}>All</Text>
        <Text style={styles.typeTxt}>Suv</Text>
        <Text style={styles.typeTxt}>Sedan</Text>
        <Text style={styles.typeTxt}>Mpv</Text>
        <Text style={styles.typeTxt}>Hatchback</Text>
      </View>

      <View style={styles.listSection}>
        <Text style={styles.headTxt}>Most Rented </Text>
       
        <View style={styles.elementPallet}>
        {
          filter.map((item)=>{
            return(
              <TouchableOpacity style={styles.element} key={item.id} onPress={()=>
                navigation.navigate('InfoScreen' ,{id:item.id})
              }>
            <View style={styles.infoArea}>
              <Text style={styles.infoTitle}>{item.make} {item.model}</Text>
              <Text style={styles.infoSub}>{item.type}-{item.transmission}</Text>
              <Text style={styles.infoPrice}>
                {item.price_per_day}
                <Text style={styles.infoDays}>/days</Text>
              </Text>
            </View>
            <View style={styles.imageArea}>
              <Image
                source={getImage(item.id)}
                resizeMode="contain"
                style={styles.vehicalImage}
              />
            </View>
          </TouchableOpacity>
            )
          })
        }
          
        
          
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
    width: 30,
  },
  faceIconStyle: {
    width: 40,
  },
  //   titleSection:{
  // // marginTop:10
  //   },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#000',
  },
  searchSection: {
    margin: 15,
  },
  searchPellet: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    color: '#000',
  },
  magnifyingIconStyle: {
    width: 30,
    height: 30,
  },
  typeSection: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  typeTxtActive: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  typeTxt: {
    fontSize: 15,
    color: '#696969',
    fontWeight: '500',
  },
  listSection: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  headTxt: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  elementPallet: {
    width: '100%',
    height: 440,
  },
  element: {
    backgroundColor: '#fff',
    height: 100,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    marginBottom:10
  },
  infoArea: {
    flex: 0.4,
    marginHorizontal: 10,
    marginTop: 5,
  },
  infoTitle: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },
  infoSub: {
    color: '#696969',
    fontSize:13
  },

  infoPrice: {
    color: '#000',
    fontWeight: '900',
    fontSize: 14,
    marginTop:10,
  },

  infoDays: {
    color: '#696969',
    fontSize: 14,
    fontWeight: '500',
  },
  imageArea: {
    flex: 0.6,
  },
  vehicalImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
