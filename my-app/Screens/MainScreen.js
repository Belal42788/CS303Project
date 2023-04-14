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
});
export default MainScreen;
