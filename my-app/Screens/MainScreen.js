import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import React, { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { doc, setDoc, getFirestore, updateDoc, getDoc, addDoc, deleteDoc } from "firebase/firestore";
import cardArray from "../Middleware/carcard.js";
import Brands from "../Middleware/brands.js";
import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";
import Models from "../Middleware/Models.js";
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
  ScrollView,
} from "react-native";

function MainScreen({ navigation }) {
  const user = auth.currentUser;
  const db = getFirestore();
  const [Admin, setAdmin] = useState(false);

  useEffect(() => {
    GetUserInfo();
  })
  //to get user info
  const GetUserInfo = async () => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setAdmin(docSnap.data().Admin);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const Edit = () => {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => { navigation.navigate('Admin') }}>
          Edit
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <LinearGradient style={styles.container} colors={["#1c2834", "#d0a20e"]}>
      <Header navigation={navigation} />
      <Brands />
      {
        Admin ? Edit() : <></>
      }
      <Text style={styles.TextModel}>Recently Added</Text>
      <Models />
      <Footer navigation={navigation} />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343f4a",
  },
  header: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "space-between",
    backgroundColor: "#fff",
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
    marginLeft: 9,
  },
  PhotoStyle: {
    width: 50,
    height: 50,
    bordertWidth: "5",
    borderRadius: "50%",
    marginLeft: "50%",
  },
  marksscroll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    gap: 15,
  },
  TextModel: {
      marginTop: 5,
      color: "black",
      fontWeight: "bold",
      textTransform: "capitalize",
      fontSize: 20,
      textAlign: "center",
      fontFamily: "cairo",
  },
  button: {
      width: "70%",
      borderRadius: 18,
      height: 40,
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "black",
      display: "flex",
      marginTop: 3,
      backgroundColor: "#ce9e04",
      marginLeft: "15%"
  },
  buttonText: {
      color: "black",
      fontWeight: "bold",
      textTransform: "capitalize",
      fontSize: 20,
      textAlign: "center",
      fontFamily: "cairo",
  },
});
export default MainScreen;
