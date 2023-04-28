import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import React, { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { doc, setDoc, getFirestore, updateDoc, getDoc, addDoc, deleteDoc } from "firebase/firestore";
import cardArray from "../Middleware/carcard.js";
import  Brands  from "../Middleware/Brands.js";
import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";
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
        <Text style={styles.buttonText} onPress={()=>{navigation.navigate('Admin')}}>
          Edit
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {/* <View style={styles.marks}>
        <ScrollView horizontal={true} contentContainerStyle={styles.marksscroll} >
          {BrandsArray.map((m) => {
            return (
              <TouchableOpacity key={m.id}>
                <Image source={m.img} style={styles.marksicons} />
                <Text style={styles.markstext}>{m.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View> */}
      <Brands />
      {
        Admin ? Edit() : console.log("not Admin")
      }
      <Text style={styles.TextModel}>Model</Text>
      <View style={styles.products}>
        {cardArray.map((o) => {
          return (
            <TouchableOpacity style={styles.card} key={o.id}>
              <Text style={styles.title}>{o.nameCar}</Text>
              <Image resizeMode="contain" resizeMethod="scale" source={o.img} style={styles.image} />
              <View style={styles.info}>
                {/* <Text style={styles.numofseats}>💺{o.seats} seats</Text> */}
                {/* <Text style={styles.price}>💳{o.rent}$/hour </Text> */}
                  <Text style={styles.price}><Image  resizeMode="contain" resizeMethod="scale" source={ require('../assets/animation_640_lh12v8mb.gif')} style={styles.pay}/>{o.rent}$/hour </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(206, 158, 4)",
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
pay:{
  width:'20%',
  height:'auto'
},

  marks: {
    marginTop: 30,
    marginBottom: 10,
    // marginLeft:"-20%",
    display: "flex",
    flexWrap: "wrap",
    width: "auto",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  marksicons: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    marginRight: 12,
  },
  markstext: {
    color: "black",
    fontFamily: "cairo",
    fontWeight: "800",
    alignSelf: "center",
    marginTop: "10%",
    marginBottom: "20%",
    marginRight: 12,
    fontSize: 15
  },
  products: {
    marginTop: "4%",
    marginBottom: "4%",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "lightgray",
    padding: "auto",
    paddingRight: "1%",
    paddingTop: "10%",
    paddingBottom: 70,
    borderRadius: 20,
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
    gap: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    shadowColor: "black",
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.45,
    shadowRadius: 0.54,
    elevation: 5,
    padding: 5,
    height: "auto",
    width: "auto",
    minWidth: 250,
    minHeight: 300,
    marginLeft: "6%",
    marginBottom: "2%",
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 10,
    minWidth: 310,
    minHeight: 300,
    right: -15,
    height: "70%",
    resizeMode: "contain",
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "120%",
    fontWeight: "700",
    fontFamily: "cairo",
    marginTop: "3%",
    marginBottom: "3%",
    textAlign: "center",
  },
  price: {
    position: 'absolute',
    bottom: -230,
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    fontFamily: "cairo",
    maxWidth: "100%",
    minWidth: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  numofseats: {
    fontSize: "80%",
    fontWeight: "700",
    color: "black",
    fontFamily: "cairo",
    maxWidth: "50%",
    flexWrap: "wrap",
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
      marginLeft:"15%"
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
