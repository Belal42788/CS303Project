import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import React, { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  FlatList,
} from "react-native";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchbarview}>
          <TextInput
            style={styles.searchbartext}
            placeholder="  🔎 Search your dream Car:"
            placeholderTextColor="#003f5c"
          />
        </View>
        <TouchableOpacity>
          <Image
            source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")}
            style={styles.PhotoStyle}
            onPress={() => navigation.navigate("Profile")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.marks}>
        <TouchableOpacity>
          <Image
            source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")}
            style={styles.marksicons}
          />
          <Text style={styles.markstext}>Tesla</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")}
            style={styles.marksicons}
          />
          <Text style={styles.markstext}>Mazda</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")}
            style={styles.marksicons}
          />
          <Text style={styles.markstext}>Ford</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")}
            style={styles.marksicons}
          />
          <Text style={styles.markstext}>Ferrari</Text>
        </TouchableOpacity>
      </View>
      <View  style={styles.products}>
      <TouchableOpacity style={styles.card}>
      <Image   source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")} style={styles.image} />
      <Text style={styles.title}>Tesla Model X</Text>
      <View style={styles.info} >
      <Text style={styles.numofseats}>💺4 seats</Text>
      <Text style={styles.price}>💳30$/hour</Text>
      </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Image   source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")} style={styles.image} />
      <Text style={styles.title}>Tesla Model X</Text>
      <View style={styles.info} >
      <Text style={styles.numofseats}>💺4 seats</Text>
      <Text style={styles.price}>💳30$/hour</Text>
      </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Image   source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")} style={styles.image} />
      <Text style={styles.title}>Tesla Model X</Text>
      <View style={styles.info} >
      <Text style={styles.numofseats}>💺4 seats</Text>
      <Text style={styles.price}>💳30$/hour</Text>
      </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Image   source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")} style={styles.image} />
      <Text style={styles.title}>Tesla Model X</Text>
      <View style={styles.info} >
      <Text style={styles.numofseats}>💺4 seats</Text>
      <Text style={styles.price}>💳30$/hour</Text>
      </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Image   source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")} style={styles.image} />
      <Text style={styles.title}>Tesla Model X</Text>
      <View style={styles.info} >
      <Text style={styles.numofseats}>💺4 seats</Text>
      <Text style={styles.price}>💳30$/hour</Text>
      </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Image   source={require("../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg")} style={styles.image} />
      <Text style={styles.title}>Tesla Model X</Text>
      <View style={styles.info} >
      <Text style={styles.numofseats}>💺4 seats</Text>
      <Text style={styles.price}>💳30$/hour</Text>
      </View>
    </TouchableOpacity>
     
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "flex-end",
    // padding: 3,
    backgroundColor: "white",
  },
  header: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "space-between",
    marginTop:"5%",
  },
  searchbarview: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2.5,
    borderRadius: 70,
    width: "85%",
    height: "70%",
    fontFamily: "cairo",
    marginBottom: "5px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    alignContent: "flex-start",
    alignSelf: "center",
    marginLeft: "-10%",
  },
  searchbartext: {
    fontSize: "80%",
    width: "90%",
    height: "90%",
    textAlign: "left",
    color: "black",
    fontFamily: "cairo",
    fontWeight: "700",
  },
  PhotoStyle: {
    width: 50,
    height: 50,
    bordertWidth: "5",
    borderRadius: "50%",
    marginLeft: "50%",
  },
  marks: {
    marginTop: "10%",
    marginBottom: "10%",
    // marginLeft:"-20%",
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "space-between",
  },
  marksicons: {
    width: 80,
    height: 80,
    borderRadius: "50%",
  },
  markstext: {
    color: "black",
    fontFamily: "cairo",
    fontWeight: "800",
    alignSelf: "center",
    marginTop: "10%",
    marginBottom: "20%",
  },
  products:{
    marginTop: "10%",
    marginBottom: "10%",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height :"auto",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor:"lightgray",
    padding:"auto",
    paddingRight:"1%",
    paddingTop:"10%",
    borderRadius:20,
    borderBottomEndRadius:0,
    borderBottomLeftRadius:0,
    

  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
    height:270,
    width :175,
    marginLeft:"2%",
    marginBottom:"2%",

    
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 15,
    height:"70%",
    borderBottomEndRadius:0,
    borderBottomLeftRadius:0,
  },
  info:{
 display:"flex",
 flexDirection:"row",
 alignContent:"space-around",
 alignItems:"center",
 justifyContent:"space-between",
  },
  title: {
    fontSize: "100%",
    fontWeight: '700',
    fontFamily: "cairo",
    marginBottom:"5%"
  },
  price: {
    fontSize: "80%",
    fontWeight: '700',
    color: 'black',
    fontFamily: "cairo",
  },
  numofseats:{
    fontSize: "80%",
    fontWeight: '700',
    color: 'black',
    fontFamily: "cairo",
  }

});
export default MainScreen;
