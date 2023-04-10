import { StyleSheet, View, Text, Image, useWindowDimensions, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { ReactDOM } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { useFonts } from "expo-font";
//import { StatusBar } from "expo-status-bar";
import backgroundpic from "../assets/zachary-edmundson-ygqZpaNl_dM-unsplash - Copy.jpg"



function wellcome({ navigation }) {
    const { height } = useWindowDimensions();
    return (

        <ImageBackground source={require('../assets/Exclusive Luxury Car  (Instagram Post15).jpg')} style={styles.container}>
               <TouchableOpacity style={styles.logocont}>
                <Text style={styles.screenText}><FontAwesome name="xing"size={"100%"} color="white"style={{}}/> Luxury</Text>
                </TouchableOpacity>
                {/* <Text style={styles.buttonText}>
                    Find a variety of the car ofyour dreams, at a good price and quality premium.
                </Text> */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')} >
              <Text style={styles.buttonText}>GET STARTED </Text> 
              {/* < FontAwesome name="arrow-right" style={styles.ico}  size={"100%"} color="white" /> */}
            </TouchableOpacity>
            {/* <FontAwesome name="arrow-right" size={"100%"} color="white" style={{ marginLeft: "12%" }} /> */}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signInButton}>Already have an account? SIGN IN</Text>
            </TouchableOpacity>
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent:"flex-end",
        padding: 3,
        backgroundColor: 'transparent',
    },
    logocont:{
  flex:1,
  alignItems: "center",
  justifyContent:"flex-start",
  width:"100%"
    },
    button: {
        width: "90%",
        borderRadius: 20,
        height: "8%",
        marginBottom: "2%",
        justifyContent: "center",
        alignItems:"flex-end",
        alignContent:"center",
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "black",
        display:"flex",
        


    },
    ico: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
      marginLeft:"5%",
      width: "100%",
       


    },
    buttonText: {
        color: "black",
        fontSize: "200%",
        fontWeight: "700",
        fontFamily:'cairo',
        alignSelf:"center",

    },
    screenText: {
        color: "white",
        fontSize: "250%",
        fontWeight: "600",
        fontFamily:'prompt',
        alignSelf:"center",
        marginTop:"5%"
    },
    signInButton: {
        marginBottom: 40,
        marginTop: "9%",
        textDecorationLine: "underline",
        fontSize: 16,
           color: "#003f5c",
           color: "rgb(100, 128, 128)",
           fontFamily:'cairo'
    },
});

export default wellcome; 