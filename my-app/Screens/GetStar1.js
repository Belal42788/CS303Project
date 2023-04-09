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

        <ImageBackground source={require('../assets/Exclusive Luxury Car  (Instagram Post4).jpg')} style={styles.container}>
               <TouchableOpacity style={styles.logocont}>
                <Text style={styles.screenText}><FontAwesome name="xing"size={"100%"} color="white"style={{}}/> Luxury</Text>
                </TouchableOpacity>
                {/* <Text style={styles.buttonText}>
                    Find a variety of the car ofyour dreams, at a good price and quality premium.
                </Text> */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')} >
              <Text style={styles.buttonText}>GET STARTED < FontAwesome name="arrow-right" style={styles.ico}  size={"100%"} color="white" /></Text> 
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
        padding: 0,
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
        borderRadius: 50,
        height: "8%",
        marginBottom: "2%",
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#bdc20c",
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "black",


    },
    ico: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
      marginLeft:"5%",
      width: "100%",
       


    },
    buttonText: {
        // marginLeft: "30%",
        color: "black",
        fontSize: "200%",
        fontWeight: "600",
        fontFamily:'mulish',
        marginRight:"0",
        lineHeight:"1.2",
        marginLeft:"5%",
        alignSelf:"center",
        justifyContent:"center",
        // alignItems: "center",
        // justifyContent: "center",
        width: "100%"

    },
    screenText: {
        color: "white",
        fontSize: "250%",
        fontWeight: "600",
        fontFamily:'mulish',
        alignSelf:"center",
        marginTop:"5%"
    },
    signInButton: {
        marginBottom: 40,
        marginTop: 20,
        textDecorationLine: "underline",
        fontSize: 20,
           color: "#003f5c",
           color: "rgb(100, 128, 128)",
           fontFamily:'mulish'
    },
});

export default wellcome; 