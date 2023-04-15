import { StyleSheet, View, Text, Image, useWindowDimensions, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { ReactDOM } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { useFonts } from "expo-font";
//import { StatusBar } from "expo-status-bar";
import backgroundpic from "../assets/zachary-edmundson-ygqZpaNl_dM-unsplash - Copy.jpg"



function GetSart2({ navigation }) {
    const { height } = useWindowDimensions();
    return (

        <ImageBackground source={require('../assets/Exclusive Luxury Car (Instagram Post15editblur).jpg')} style={styles.container}>
            <View style={styles.logocont}>
                <Text style={styles.logoText}><FontAwesome name="xing" size={"25px"} color="white" style={{}} /> Luxury</Text>
            </View>
            <View style={styles.buttonscontain}>
                <TouchableOpacity style={styles.upperbuttons}></TouchableOpacity>
                <TouchableOpacity style={styles.specialbutton}></TouchableOpacity>
                <TouchableOpacity style={styles.upperbuttons}></TouchableOpacity>
            </View>
            <View style={styles.topScreenView}>
                <Text style={styles.screenText}>
                    With just a few taps, choose your preferred car from our well maintained fleet and book it instantly.
                </Text>
            </View>
            {/* <View style={styles.bottomScreenView}>
            <Text style={styles.screenText}>
                Just choose the brand and the model you want then go for your RIDE!
              </Text>
            </View> */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Get Start3')} >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Get Start1")}>
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
        alignItems: "center",
        justifyContent: "flex-start",
        width: 10,
        marginBottom: 1,
        marginTop: "1%",
    },

    topScreenView: {
        flex: 1,
        alignItems: 'flex-start',
        alignContent: "flex-start",
        alignSelf: "flex-start",
        marginBottom: 1,
        textAlign: 'center'

    },

    bottomScreenView: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        width: 10,
        // marginBottom: '80%',
        paddingTop: '10%'
    },

    button: {
        width: 10,
        borderRadius: 15,
        // height: "8%",
        marginBottom: 1,
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
        width: 10,

    },
    buttonText: {
        color: "black",
        fontSize: 10,
        fontWeight: "700",

        alignSelf: "center",

    },
    buttonscontain: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: "2%",
        marginBottom: 5,
        marginLeft: "5%",

    },
    upperbuttons: {
        width: 10,
        height: "500%",
        borderRadius: 10,
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        marginTop: "0",
        marginLeft: "10%",

    },
    specialbutton: {
        width: 10,
        height: "500%",
        borderRadius: 10,
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        marginBottom: 1,
        marginTop: "4%",
        marginLeft: "10%",
    },
    logoText: {
        color: "white",
        fontSize: 10,
        fontWeight: "600",
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: "1%",
    },
    screenText: {
        color: 'white',
        fontSize: 10,
        fontWeight: '400',
        // marginTop:'5%',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        opacity: 10
    },
    backButton: {
        marginBottom: 5,
        textDecorationLine: "underline",
        fontSize: 20,
        color: '#d8d8d8',

        fontWeight: 'bold'
    },
});

export default GetSart2; 