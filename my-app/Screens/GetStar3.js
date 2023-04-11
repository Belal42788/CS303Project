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

        <ImageBackground source={require('../assets/bluredImage.jpg')} style={styles.container}>
            <View style={styles.logocont}>
                <Text style={styles.logoText}><FontAwesome name="xing" size={"25px"} color="white" style={{}} /> Luxury</Text>
            </View>
            <View style={styles.topScreenView}>
              <Text style={styles.screenText}>
                What are you waiting for?{'\n'}{'\n'}create an account and start your journey Right NOW!
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')} >
                <Text style={styles.buttonText}>LET'S GO!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Get Start2")}>
                <Text style={styles.backButton}>Back</Text>
            </TouchableOpacity>
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "flex-end",
        // padding: 3,
        backgroundColor: 'transparent',

    },
    logocont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%"
    },

    topScreenView: {
      flex:1,
      alignItems:'center',
      width: '80%',
      paddingTop:'50%',
      marginTop:'20%',
      // marginBottom:'20%',
      textAlign:'center'
    },

    bottomScreenView: {
        flex:1,
        alignItems:'center',
        textAlign:'center',
        width:'90%',
        // marginBottom: '1%'
    },

    button: {
        width: "70%",
        borderRadius: 15,
        // height: "8%",
        marginBottom: "6%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        display: "flex",
    },

    ico: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        marginLeft: "5%",
        width: "100%",

    },
    buttonText: {
        color: "black",
        fontSize: "200%",
        fontWeight: "700",
        fontFamily: 'cairo',
        alignSelf: "center",

    },
    logoText: {
        color: "white",
        fontSize: "20px",
        fontWeight: "600",
        fontFamily: 'prompt',
        justifyContent:'center',
        alignSelf: "center",
        marginTop: "5%",
    },
    screenText: {
      color:'white',
      fontSize:'25px',
      fontWeight:'400',
      // marginTop:'5%',
      alignContent:'center',
      alignItems:'center',
      textAlign:'center'
  },
    backButton: {
        marginBottom: '10%',
        textDecorationLine: "underline",
        fontSize: 20,
        color:'#d8d8d8',
        fontFamily: 'cairo',
        fontWeight:'bold'
    },
});

export default wellcome; 