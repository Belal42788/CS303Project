import React, { useState, useEffect } from "react";
import BackButton from "../Components/backButton.js";
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
function Car({ navigation ,route}) {
  return (
    <LinearGradient style={styles.container} colors={["#1c2834", "white"]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 30 }}>
                <BackButton />
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginRight: 30 }}>
                    Model
                </Text>
      </View>
      <Image resizeMode="contain" resizeMethod="scale" source={{uri:route.params.img}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{route.params.nameCar}</Text>
        <Text style={styles.price}><Text style={{ color: '#d0a20e' }}>{route.params.rent}</Text><Text style={{ color: '#444444', fontFamily: 'cairo', fontWeight: '700' }} >/hour</Text></Text>
      </View>
      <View style={styles.rate}>
        <Text style={{ color: '#444444', fontFamily: 'cairo', fontSize: 15, fontWeight: '700' }}> ⭐⭐⭐⭐⭐ 5.0 /120 Reviews</Text>
      </View>
      <View style={styles.specifi}>
        <View style={styles.column}>
          <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/CayuB64xuL.gif')} style={styles.anim} /> 4600CC</Text>
          <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/speedometer.gif')} style={styles.anim} />200 KM/H</Text>
          <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/safety-belt.gif')} style={styles.anim} />4 seats</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/eco-fuel.gif')} style={styles.anim} />pertol</Text>
          <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/manual-transmission.png')} style={styles.anim} />Auto</Text>
          <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/chassis.png')} style={styles.anim} />4WD</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Color :</Text><Text style={styles.description}>red</Text>
        <Text style={styles.title}>Car's Plate Number :</Text><Text style={styles.description}>01-47-87441</Text>
        <Text style={styles.title}>License Number:</Text><Text style={styles.description}>SN66-XMZ</Text>
        <Text style={styles.title}>Insurence Price:</Text><Text style={styles.description}>{route.params.rent}$</Text>
        <Text style={styles.title}>Location:</Text><Text style={styles.description}>Cairo</Text>
      </View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>




      {/* <Footer /> */}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    marginTop: 100,
    height: "25%",
    width: 'auto',
    resizeMode: "contain",
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
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
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: "4%",
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
    height: "30%",
    width: "85%",
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
    flex: 1,
    paddingHorizontal: 10,
  },
  anim: {
    marginRight: 5,
    width: '32%',
    height: '160%',
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
    marginBottom: "20%",
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