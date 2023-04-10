import { StyleSheet, View, Text, Image, useWindowDimensions, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { ReactDOM } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
//import { StatusBar } from "expo-status-bar";
import backgroundpic from "../assets/zachary-edmundson-ygqZpaNl_dM-unsplash - Copy.jpg"



function wellcome({ navigation }) {
    const { height } = useWindowDimensions();
    return (

        <ImageBackground source={require('../assets/2graycc.jpg')} style={styles.container}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.screenText}>
                    Luxury Cars.
                </Text>
                {/* <Text style={styles.buttonText}>
                    Find a variety of the car ofyour dreams, at a good price and quality premium.
                </Text> */}
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')} >
                <Text style={styles.buttonText}>Get started</Text>
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
        justifyContent: "flex-end",
        padding: 0,
        backgroundColor: 'transparent',
    },
    button: {
        width: "90%",
        borderRadius: 15,
        height: "8%",
        marginBottom: "10%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#965ff6",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",


    },
    ico: {
        alignSelf: "flex-end",
        marginRight: "10%",
        width: "10%",
        zIndex: 0


    },
    buttonText: {
        // marginLeft: "30%",
        color: "white",
        fontSize: "150%",
        fontWeight: "bold",
        // alignItems: "center",
        // justifyContent: "center",
        // width: "70%"

    },
    screenText: {
        marginBottom: "80%",
        color: "white",
        fontSize: "35px",
        fontWeight: "bold",
        // alignItems: "center",
        // justifyContent: "center",
        // width: "70%"

    },
    signInButton: {
        marginBottom: 40,
        marginTop: 20,
        textDecorationLine: "underline",
        fontSize: 20,
        color: 'white'
        // color: "rgb(100, 128, 128)",
    },
});

export default wellcome; 