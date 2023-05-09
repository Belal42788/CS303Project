import React, { useState, useEffect } from "react";
import BackButton from "../Components/BackButton.js";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert, ImageBackground, FlatList
} from "react-native";
import Footer from '../Layouts/Footer';
function Car({ navigation, route }) {

  return (
    <LinearGradient style={[styles.container]} colors={["#d0a20e", "#1c2834"]} start={{ x: 0.5, y: 0.5 }} end={{ x: 0.5, y: 1 }} locations={[0, 0.6]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 30 }}>
        <BackButton />
        <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginRight: 30 }}>
          Model
        </Text>
      </View>
      <Image resizeMode="contain" resizeMethod="scale" source={{ uri: route.params.img }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{route.params.nameCar}</Text>
        <Text style={styles.price}><Text style={{ color: '#c19303', fontWeight: '700', fontSize: 35 }}>{route.params.rent}$</Text><Text style={{ color: '#1c2834', fontFamily: 'cairo', fontWeight: '700' }} >/hour</Text></Text>
      </View>
      <View style={styles.rate}>
        <Text style={{ color: '#1c2834', fontFamily: 'cairo', fontSize: 15, fontWeight: '700' }}> ⭐⭐⭐⭐⭐ {route.params.review} /120 Reviews</Text>
      </View>
      <View style={styles.specifi}>
  <View style={styles.column}>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/CayuB64xuL.gif')} style={styles.anim} />
      <Text style={styles.information}>Capacity</Text> <Text style={styles.specifiDescription}>{route.params.hoursepower} CC</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/speedometer.gif')} style={styles.anim} />
      <Text style={styles.information}>Top Speed</Text> <Text style={styles.specifiDescription}>{route.params.topspeed} KM/H</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/safety-belt.gif')} style={styles.anim} />
      <Text style={styles.information}>Seats</Text> <Text style={styles.specifiDescription}>{route.params.seats} seats</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/galloping horse gif.gif')} style={styles.anim} />
      <Text style={styles.information}>hoursepower</Text> <Text style={styles.specifiDescription}>{route.params.horsepower}</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/calendar.gif')} style={styles.anim} />
      <Text style={styles.information}>Year</Text> <Text style={styles.specifiDescription}>{route.params.year}</Text>
    </View>
  </View>
  <View style={styles.column}>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/eco-fuel.gif')} style={styles.anim} />
      <Text style={styles.information}>Fuel</Text><Text style={styles.specifiDescription}>{route.params.fuel}</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/manual-transmission.png')} style={styles.anim} />
      <Text style={styles.information}>Transmission</Text> <Text style={styles.specifiDescription}>{route.params.transmission}</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/chassis.png')} style={styles.anim} />
      <Text style={styles.information}>Chassis</Text> <Text style={styles.specifiDescription}>{route.params.chassis}WD</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/length.png')} style={styles.anim} />
      <Text style={styles.information}>Length</Text> <Text style={styles.specifiDescription}>{route.params.Length}mm</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/tank-truck.gif')} style={styles.anim} />
      <Text style={styles.information}>Tank Capacity</Text> <Text style={styles.specifiDescription}>{route.params.Tankapacity}</Text>
    </View>
  </View>
  <View style={styles.column}>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/Acceleration.gif')} style={styles.anim} />
      <Text style={styles.information}>Acceleration</Text><Text style={styles.specifiDescription}>{route.params.Acceleration}</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/speeds.gif')} style={styles.anim} />
      <Text style={styles.information}>Speeds</Text> <Text style={styles.specifiDescription}>{route.params.Speeds}</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets//assembly.png')} style={styles.anim} />
      <Text style={styles.information}>Assembly Country</Text> <Text style={styles.specifiDescription}>{route.params.AssemblyCountry}</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/Torque.png')} style={styles.anim} />
      <Text style={styles.information}>Torque</Text> <Text style={styles.specifiDescription}>{route.params.Torque}</Text>
    </View>
    <View style={styles.specifiItem}>
      <Image resizeMode="contain" resizeMethod="scale" source={require('../assets/traction.png')} style={styles.anim} />
      <Text style={styles.information}>Traction</Text><Text style={styles.specifiDescription}>{route.params.Traction}</Text>
    </View>
  </View>
</View>

      <View style={styles.card}>
        <Text style={styles.title}>Color :</Text><Text style={styles.description}>{route.params.color}</Text>
        <Text style={styles.title}>Car's Plate Number :</Text><Text style={styles.description}>{route.params.CarsPlateNumber}</Text>
        <Text style={styles.title}>License Number:</Text><Text style={styles.description}>{route.params.LicenseNumber}</Text>
        <Text style={styles.title}>Insurence Price:</Text><Text style={styles.description}>{route.params.InsurencePrice}$</Text>
        <Text style={styles.title}>Location:</Text><Text style={styles.description}>{route.params.Location}</Text>
      </View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
      <Footer navigation={navigation} />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    maxHeight: 'auto',
  },
  image: {
    height: 200,
  },
  specifiItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  information:{
  color:"#777",
  fontFamily: "cairo",
  fontWeight: "600",
  textAlign: "center",
  fontSize:15,
  lineHeight:14,

  },
  specifiDescription: {
    fontSize: 15,
    fontFamily: "cairo",
    fontWeight: "800",
    textAlign: "center",
    marginTop: 0,
    marginBottom:"15%",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    fontFamily: "cairo",
    maxWidth: "60%",
    flexWrap: "wrap",
    lineHeight: 18,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    fontFamily: "cairo",
    maxWidth: "50%",
    flexWrap: "wrap",
  },
  rate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  specifi: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: "4%",
    paddingTop:"4%",
    paddingLeft:"2%",
    paddingRight:"2%",
    paddingBottom:"4%",
    marginBottom: "4%",
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    height: 'auto',
    width: "90%",
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  specifitext: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
    color: '#444444',
    fontFamily: 'cairo',
    fontWeight: '700',
    marginBottom: 25,
    marginTop: 10,
    textAlign: "center",
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 10,
  },
  anim: {
    marginRight: 5,
    width: '59%',
    height: 69,
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    width: '60%',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'cairo',
    textAlign: 'left'
  },
  description: {
    textAlign: "right",
    width: '40%',
    fontSize: 16,
    fontFamily: 'cairo',
    fontWeight: '600'
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: "60%",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#ce9e04",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    display: "flex",
    marginBottom: "10%",
    marginTop: "4%"
  },
  buttonText: {
    color: "#232e3a",
    fontSize: "200%",
    fontWeight: "700",
    fontFamily: 'cairo',
    alignSelf: "center",
  },
});





export default Car; 