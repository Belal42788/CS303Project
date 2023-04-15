import { StyleSheet, View, Text, Image, useWindowDimensions, TouchableOpacity, ImageBackground, Button } from "react-native";
import React from "react";
import { ReactDOM } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { useFonts } from "expo-font";
//import { StatusBar } from "expo-status-bar";
import backgroundpic from "../assets/zachary-edmundson-ygqZpaNl_dM-unsplash - Copy.jpg"



function GetStar1({ navigation }) {
    const { height } = useWindowDimensions();
    return (

        <ImageBackground source={require('../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg')} style={styles.container}>
            <View style={styles.logocont}>
                <Text style={styles.logoText}><FontAwesome name="xing" size={"25px"} color="white" style={{}} /> Luxury</Text>
            </View>
            <View style={styles.buttonscontain}>
                <TouchableOpacity style={styles.specialbutton}></TouchableOpacity>
                <TouchableOpacity style={styles.upperbuttons}></TouchableOpacity>
                <TouchableOpacity style={styles.upperbuttons}></TouchableOpacity>
            </View>
            <View style={styles.topScreenView}>
                <Text style={styles.screenTopText}>Luxury Cars.</Text>
                <Text style={styles.screenTopText}>Enjoy the Permium</Text>

            </View>
            <Text style={styles.screenBottomText}>
                Find a variety of the car of your dreams, at a good price and quality premium.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Get Start2')} >
                <Text style={styles.buttonText}>GET STARTED </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.skipButton}>Skip</Text>
            </TouchableOpacity>

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
        backgroundColor: 'transparent',
        height: "100%"

    },
    logocont: {
        alignItems: "center",
        justifyContent: "flex-start",
        width: 10,
        marginBottom:1,
        marginTop: "1%",
    },

    topScreenView: {
        flex: 1,
        alignItems: 'center',
        width: 10,
        marginBottom:5,
    },
    buttonscontain: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: "2%",
        marginLeft: "5%",
    },
    upperbuttons: {
        width: 10,
        height: "500%",
        borderRadius:5,
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        marginBottom:1,
        marginTop: "4%",
        marginLeft: "10%",
    },
    specialbutton: {
        width: 10,
        height: "500%",
        borderRadius:5,
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        marginBottom: 1,
        marginTop: "4%",
        marginLeft: "10%",
    },
    bottomScreenView: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '20%',
        // marginBottom: '1%'
        margin: "5%",
    },

    button: {
        width: 10,
        borderRadius: 18,
        // height: "8%",
        // marginBottom: "2%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        display: "flex",
        marginBottom: 1,
        marginTop: "8%"
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
    logoText: {
    color: "white",
    fontSize: 10,
    fontWeight: "600",
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: "1%",
},
    screenTopText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '400',
    // marginTop:'5%',
    alignContent: 'center',
    width: 10,
    textAlign: "center",


},
    screenBottomText: {
    color: '#d8d8d8',
    fontWeight: '400',
    fontSize: 10,
    width: 10,
    opacity:10,
    textAlign: "center",
        
    },
signInButton: {
    marginBottom: 5,
        // marginTop: "9%",
        textDecorationLine: "underline",
            fontSize: 16,
                color: '#d8d8d8',
         
    },
skipButton: {
    marginBottom: 5,
        textDecorationLine: "underline",
            fontSize: 20,
                color: '#d8d8d8',
         
                    fontWeight: 'bold'
}
});

export default GetStar1; 